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
    // const { contents, thumbImage, images, ...productData } = createProductDto;
  
    await this.prisma.product.create({
      data: {
        isActive: dto.isActive,
        price: dto.price,
        oldPrice: dto.oldPrice,
        article: dto.article,
        codeRef: dto.codeRef,
        brand: dto.brand,
        origin_country: dto.origin_country,
        vat_rate: dto.vat_rate,
        companyId: dto.companyId,
        thumbImageId: dto.thumbImage?.id,
        images: {
          connect: dto.images.map((media) => ({ id: media.id })),
        },
        attributes: {
          create: dto.attributes.map((attr) => ({
            value: attr.value,
            detail: { connect: { id: attr.detailId } },
          })),
        },
        productContent: {
          create: dto.contents.map((content) => ({
            ...content,
            lang: { connect: { langId: content.langId } },
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
        productContent: true,
        categoryProducts: true,
        thumbImage: true,
        images: true
      }
    })
    const total = await this.prisma.product.count();
    const mapped = products.map((product) => {
      return plainToInstance(ProductResponseDto, product, {excludeExtraneousValues: true});
    });

    return new PaginationResultDto(total, mapped);
  }

  async findOne(id: number): Promise<ProductResponseDto> {
    const product =  await this.prisma.product.findFirst({
      where: {id},
      include: {
        productContent: true,
        categoryProducts: true,
        images: true,
        thumbImage: true
      }
    })
    return plainToInstance(ProductResponseDto, product, {excludeExtraneousValues: true});
  }

  async findBySlug(slug: string): Promise<ProductResponseDto> {
    const product = await this.prisma.product.findFirst({
      where: {
        productContent: {
          some: {
            slug
          }
        }
      },
      include: {
        productContent: true,
        categoryProducts: true,
        images: true,
        thumbImage: true
      }
    })
    if (!product) throw new NotFoundException('Product not found');
    return plainToInstance(ProductResponseDto, product, {excludeExtraneousValues: true});
  }

  async update(id: number, dto: UpdateProductDto) {
    await this.prisma.product.update({
      where: {id},
      data: {
        isActive: dto.isActive,
        price: dto.price,
        oldPrice: dto.oldPrice,
        article: dto.article,
        codeRef: dto.codeRef,
        brand: dto.brand,
        origin_country: dto.origin_country,
        vat_rate: dto.vat_rate,
        company: dto.companyId ? { connect: { id: dto.companyId } } : undefined,
        thumbImage: dto.thumbImage?.id ? { connect: { id: dto.thumbImage.id } } : undefined,
        images: dto.images ? { connect: dto.images.map((media) => ({ id: media.id })) } : undefined,
        productContent: {
          deleteMany: {},
          create: dto.contents.map((c) => ({ ...c }))
        },
        attributes: {
          deleteMany: {},
          create: dto.attributes.map((a) => ({
            value: a.value,
            detail: { connect: { id: a.detailId } }
          }))
        },
      },
      include: {
        productContent: true,
        categoryProducts: true,
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
