import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LangService } from '../lang.service';
import { CreateLangDto } from '../dto/create-lang.dto';
import { UpdateLangDto } from '../dto/update-lang.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('admin / langs')
@Controller('admin/langs')
export class AdminLangController {
  constructor(private readonly langService: LangService) {}

  @Post()
  create(@Body() createLangDto: CreateLangDto) { 
    return this.langService.create(createLangDto);
  }

  @Get()
  findAll() {
    
    return this.langService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.langService.remove(+id);
  }
}
