import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Query, HttpStatus, ParseIntPipe  } from '@nestjs/common';
import { CategoryService } from '../category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { UpdateCategoryDto } from '../dto/update-category.dto';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { STATUS_CODES } from 'http';
import { PaginationResultDto } from 'src/dto/pagination-result.dto';
import { CategoryResponseDto } from '../dto/category-response.dto';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';

@ApiTags('categories')
@Controller('categories')
export class ClientCategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiResponse({status: HttpStatus.CREATED, description: 'Category created successfuly'})
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<void> {
    return await this.categoryService.create(createCategoryDto);
  }

  @ApiResponse({status: HttpStatus.OK, description: "List of categories"})
  @Get()
  async findAll(
    @Query() query: PaginationQueryDto
  ): Promise<PaginationResultDto<CategoryResponseDto>> {
    const {page, limit} = query;
    return await this.categoryService.findAll(page, limit);
  }

  @ApiResponse({status: HttpStatus.OK})
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number
  ): Promise<CategoryResponseDto> {
    return await this.categoryService.findOne(id);
  }

  @ApiResponse({status: HttpStatus.OK})
  @Get('/slug/:slug')
  async findBySlug(
    @Param('slug') slug: string
  ): Promise<CategoryResponseDto> {
    return await this.categoryService.findBySlug(slug);
  }

  @ApiResponse({status: HttpStatus.NO_CONTENT, description: 'Category updated successfuly'})
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Category not found' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  async update(
    @Param('id') id: string, 
    @Body() updateCategoryDto: UpdateCategoryDto
  ): Promise<void>  {
    return await this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  @ApiResponse({status: HttpStatus.NO_CONTENT, description: 'Category deleted successfuly'})
  @ApiResponse({status: HttpStatus.NOT_FOUND, description: 'Category not found'})
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(
    @Param('id') id: string
  ): Promise<void> {
    return await this.categoryService.remove(+id);
  }
}
