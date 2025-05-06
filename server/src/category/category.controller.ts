import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query, HttpStatus  } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { STATUS_CODES } from 'http';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiResponse({status: HttpStatus.CREATED, description: 'Category created successfuly'})
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return await this.categoryService.create(createCategoryDto);
  }

  @ApiResponse({status: HttpStatus.OK, description: "List of categories"})
  @ApiQuery({name: 'page', required: false, type: Number, example: 1})
  @ApiQuery({name: 'limit', required: false, type: Number, example: 10})
  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10
  ) {
    return await this.categoryService.findAll(page, limit);
  }

  @ApiResponse({status: HttpStatus.OK})
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.categoryService.findOne(+id);
  }

  @ApiResponse({status: HttpStatus.NO_CONTENT, description: 'Category updated successfuly'})
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Category not found' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    return await this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiResponse({status: HttpStatus.NO_CONTENT, description: 'Category deleted successfuly'})
  @ApiResponse({status: HttpStatus.NOT_FOUND, description: 'Category not found'})
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return await this.categoryService.remove(+id);
  }
}
