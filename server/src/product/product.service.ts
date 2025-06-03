import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PaginationResultDto } from 'src/dto/pagination-result.dto';
import { ProductResponseDto } from './dto/product-response.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto) {
    const { contents, thumbImage, images, ...data } = dto;
  
    await this.prisma.product.create({
      data: {
        ...data,
        thumbImageId: thumbImage?.id ?? undefined,
        images: {
          connect: dto.images ? dto.images.map((media) => ({ id: media.id })) : undefined,
        },
        attributes: dto.attributes ?{
          create: dto.attributes.map((attr) => ({
            value: attr.value,
            detail: { connect: { id: attr.id } },
          })),
        } : undefined,
        contents: {
          create: dto.contents.map((content) => ({
            ...content,
            langId: content.langId,
          })),
        },
      },
    });

  }

  async findAll(page?: number, limit?: number): Promise<PaginationResultDto<ProductResponseDto>> {
    const skip = (page - 1) * limit;
    const products = await this.prisma.product.findMany({
      skip, 
      take: limit,
      where: {},
      include: {
        contents: true,
        thumbImage: true,
        category: {
          include: {
            contents: true
          }
        },
        images: true
      }
    })
    const total = await this.prisma.product.count();
    const mapped = products.map((product) => {
      return plainToInstance(ProductResponseDto, {
        ...product,
        category: {
          id: product?.category?.id,
          title: product?.category?.contents[0]?.title || '',
          slug: product?.category?.contents[0]?.slug || '',
          langId: product?.category?.contents[0]?.langId || '',
        }
      }, {excludeExtraneousValues: true});
    });

    return new PaginationResultDto(total, mapped);
  }

  async findOne(id: number): Promise<ProductResponseDto> {
    const product =  await this.prisma.product.findFirst({
      where: {id},
      include: {
        contents: true,
        category: {
          include: {
            contents: true
          }
        },
        images: true,
        thumbImage: true
      }
    })
    return plainToInstance(ProductResponseDto, {
      ...product,
        category: {
          id: product?.category?.id,
          title: product?.category?.contents[0]?.title || '',
          slug: product?.category?.contents[0]?.slug || '',
          langId: product?.category?.contents[0]?.langId || '',
        }
    }, {excludeExtraneousValues: true});
  }

  async findBySlug(slug: string): Promise<ProductResponseDto> {
    const product = await this.prisma.product.findFirst({
      where: {
        contents: {
          some: {
            slug
          }
        }
      },
      include: {
        contents: true,
        category: {
          include: {
            contents: true
          }
        },
        images: true,
        thumbImage: true
      }
    })
    if (!product) throw new NotFoundException('Product not found');
    return plainToInstance(ProductResponseDto, {
      ...product,
        category: {
          id: product?.category?.id,
          title: product?.category?.contents[0]?.title || '',
          slug: product?.category?.contents[0]?.slug || '',
          langId: product?.category?.contents[0]?.langId || '',
        }
    }, {excludeExtraneousValues: true});  }

  async update(id: number, dto: UpdateProductDto) {
    const { contents, thumbImage, images, ...data } = dto;

    await this.prisma.product.update({
      where: {id},
      data: {
        ...data,
        images: dto.images ? { connect: dto.images.map((media) => ({ id: media.id })) } : undefined,
        thumbImageId: thumbImage?.id ?? undefined,
        contents: {
          deleteMany: {},
          create: dto.contents.map((c) => ({ ...c }))
        },
        attributes: {
          deleteMany: {},
          create: dto.attributes.map((a) => ({
            value: a.value,
            detail: { connect: { id: a.id } }
          }))
        },
      },
      include: {
        contents: true,
        thumbImage: true
      }
    });
  }

  async remove(id: number) {
    return await this.prisma.product.delete({
      where: {id}
    });
  }
}
