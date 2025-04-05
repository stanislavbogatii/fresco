import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) { }

  async create(createCategoryDto: CreateCategoryDto) {
    const { contents, ...categoryData } = createCategoryDto;
    
    const category = await this.prisma.category.create({
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
    return category;
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const categories = await this.prisma.category.findMany({
      skip,
      take: limit,
      include: {
        categoryContent: true
      }
    });
    return categories; 
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findFirst({
      where: { id },
      include: {
        categoryContent: true
      }
    });
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const { contents, ...categoryData } = updateCategoryDto;

    const category = await this.prisma.category.update({
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
    return category;
  }

  async remove(id: number) {
    const category = await this.prisma.category.delete({
      where: {
        id,
      },
      include: { categoryContent: true },  
    })
    return category;
  }
}
 