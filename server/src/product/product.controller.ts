import { Controller, Get, Post, Body, Patch, Param, Delete, Query, HttpCode, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PaginationResultDto } from 'src/dto/pagination-result.dto';
import { ProductResponseDto } from './dto/product-response.dto';
import { PaginationQueryDto } from 'src/dto/pagination-query.dto';
import { GetProductsQueryDto } from './dto/get-products-query.dto';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiResponse({status: HttpStatus.CREATED, description: 'Product created succesfuly'})
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() dto: CreateProductDto): Promise<void> {
    console.log(dto);
    await this.productService.create(dto);
  }

  @ApiResponse({status: HttpStatus.OK, description: "List of producst", type: PaginationResultDto<ProductResponseDto>})
  @Get()
  async findAll(
    @Query() query: GetProductsQueryDto
  ) : Promise<PaginationResultDto<ProductResponseDto>> {
    return await this.productService.findAll(query);
  }

  @ApiResponse({status: HttpStatus.OK})
  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number
  ) : Promise<ProductResponseDto> {
    return await this.productService.findOne(id);
  }

  @ApiResponse({status: HttpStatus.OK})
  @Get('/slug/:slug')
  async findBySlug(
    @Param('slug') slug: string
  ) : Promise<ProductResponseDto> {
    return await this.productService.findBySlug(slug);
  }

  @ApiOperation({ summary: 'Обновить данные товара' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Product not found' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateProductDto: UpdateProductDto
  ): Promise<void> {
    await this.productService.update(id, updateProductDto);
  }

  @ApiOperation({ summary: 'Remove product' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Product not found' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number
  ) : Promise<void> {
    await this.productService.remove(id);
  }
}
