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
          create: createCategoryDto.contents
        } : undefined
      },
      include: {
        categoryContent: true
      }
    })
    return category;
  }

  async findAll() {
    const categories = await this.prisma.category.findMany({
      include: {
        categoryContent: true
      }
    });
    return categories; 
  }

  async findOne(id: number) {
    const category = await this.prisma.category.findUnique({
      where: { id },
      include: {
        categoryContent: true
      }
    });
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const { contents, ...categoryData } = updateCategoryDto;
    console.log(categoryData)

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
 