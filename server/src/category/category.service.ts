import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryResponseDto } from './dto/category-response.dto';
import { plainToInstance } from 'class-transformer';
import { PaginationResultDto } from 'src/dto/pagination-result.dto';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<void> {
    const { contents, ...categoryData } = createCategoryDto;
    
    await this.prisma.category.create({
      data: {
        ...categoryData,
        categoryContent: contents ? {
          create: contents
        } : undefined
      },
      include: {
        categoryContent: true
      }
    })
  }

  async findAll(page: number, limit: number): Promise<PaginationResultDto<CategoryResponseDto>> {
    const skip = (page - 1) * limit;
    const categories = await this.prisma.category.findMany({
      skip,
      take: limit,
      include: {
        categoryContent: true
      }
    });
    const total = await this.prisma.category.count();
    const mapped = categories.map((category) => {
      return plainToInstance(CategoryResponseDto, category, {
        excludeExtraneousValues: true
      })
    })
    return  new PaginationResultDto(total, mapped);
  }

  async findOne(id: number): Promise<CategoryResponseDto> {
    const category = await this.prisma.category.findFirst({
      where: { id },
      include: {
        categoryContent: true
      }
    });
    return plainToInstance(CategoryResponseDto, category, {
      excludeExtraneousValues: true
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<void> {
    const { contents, ...categoryData } = updateCategoryDto;

    await this.prisma.category.update({
      where: {
        id
      },
      data: {
        ...categoryData,
        categoryContent: contents ? {
          upsert: contents.map((content) => ({
            where: { 
              langId_categoryId: {
                langId: content.langId,
                categoryId: id
              } 
            },
            update: {
              title: content.title,
              description: content.description,
              slug: content.slug,
            },
            create: {
              title: content.title,
              description: content.description,
              slug: content.slug,
              langId: content.langId
            },
          })),
        } : undefined
      },
      include: {
        categoryContent: true
      }
    })
  }

  async remove(id: number): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id,
      },
      include: { categoryContent: true },  
    })
  }
}
 