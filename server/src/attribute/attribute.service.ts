import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AttributeService {
  constructor(
    private readonly prisma: PrismaService
  ) {}

  async findAll() {
    const attriubutes = await this.prisma.attribute.findMany({});
    return attriubutes;
  }

  async findOne(id: number) {
    return `This action returns a #${id} attribute`;
  }
}
