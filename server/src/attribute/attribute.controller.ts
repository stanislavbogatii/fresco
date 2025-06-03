import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AttributeService } from './attribute.service';


@Controller('attribute')
export class AttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  @Get()
  async findAll() {
    return this.attributeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attributeService.findOne(+id);
  }
}
