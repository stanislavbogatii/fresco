import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Attribute } from '@prisma/client';
import { CreateAttributeDto } from './dto/create-attribute.dto';
import { UpdateAttributeDto } from './dto/update-attribute.dto';

@Injectable()
export class AttributeService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async create(dto: CreateAttributeDto): Promise<void> {
    await this.prisma.attribute.create({
      data: dto,
    });
  }

  async update(id: number, dto: UpdateAttributeDto): Promise<void> {
    const existing = await this.prisma.attribute.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Attribute not found');

    await this.prisma.attribute.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: number): Promise<void> {
    const existing = await this.prisma.attribute.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Attribute not found');

    await this.prisma.attribute.delete({ where: { id } });
  }

  async findAll(): Promise<Attribute[]> {
    const attributes = await this.prisma.attribute.findMany({});
    return attributes;
  }

  async findOne(id: number): Promise<Attribute> {
    const attribute = await this.prisma.attribute.findFirst({where: {id}});
    return attribute;
  }

  async findByCategory(id: number): Promise<Attribute[]> {
    const attributes = await this.prisma.attribute.findMany({
      where: {
        categoryAttribute: {
          some: {
            categoryId: id
          }
        }
      }
    });
    return attributes;
  }

  async findByProduct(id: number): Promise<Attribute[]> {
    const attributes = await this.prisma.attribute.findMany({
      where: {
        productAttribute: {
          some: {
            productId: id
          }
        }
      }
    });
    return attributes;
  }
}
