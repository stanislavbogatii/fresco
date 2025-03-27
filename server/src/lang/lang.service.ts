import { Injectable } from '@nestjs/common';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LangService {
  constructor(private prisma: PrismaService) { }

  async create(createLangDto: CreateLangDto) {
    const newLang = await this.prisma.lang.create({
      data: {
        langId: createLangDto.langId
      }
    })
    return newLang;
  }

  async findAll() {
    return await this.prisma.lang.findMany();
  }

  async findOne(id: number) {
    const lang = await this.prisma.lang.findUnique({
      where: { id },
    });
    if (!lang) {
      throw new Error(`Language with ID ${id} not found`)
    }
    return lang;
  }

  async remove(id: number) {
    const deletedLang = await this.prisma.lang.delete({
      where: { id },
    })
    return deletedLang;
  }
}
