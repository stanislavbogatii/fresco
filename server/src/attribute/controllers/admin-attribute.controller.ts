import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AttributeService } from '../attribute.service';
import { AttributeResponseDto } from '../dto/attribute-response.dto';
import { plainToInstance } from 'class-transformer';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateAttributeDto } from '../dto/create-attribute.dto';
import { UpdateAttributeDto } from '../dto/update-attribute.dto';

@ApiTags('admin / attributes')
@Controller('admin/attributes')
export class AdminAttributeController {
  constructor(private readonly attributeService: AttributeService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new attribute' })
  @ApiBody({ type: CreateAttributeDto })
  @ApiResponse({ status: 201, description: 'Attribute created successfully' })
  async create(@Body() dto: CreateAttributeDto): Promise<void> {
    await this.attributeService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an attribute by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateAttributeDto })
  @ApiResponse({ status: 200, description: 'Attribute updated successfully' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAttributeDto,
  ): Promise<void> {
    await this.attributeService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an attribute by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Attribute deleted successfully' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.attributeService.remove(id);
  }

  @Get()
  @ApiOperation({ summary: 'Get all attributes' })
  @ApiResponse({ status: 200, type: [AttributeResponseDto] })
  async findAll(): Promise<AttributeResponseDto[]> {
    const attributes = await this.attributeService.findAll();
    return attributes.map((attribute) =>
      plainToInstance(AttributeResponseDto, attribute, {
        excludeExtraneousValues: true,
        groups: ['admin'],
      }),
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get attribute by ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, type: AttributeResponseDto })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<AttributeResponseDto> {
    const attribute = await this.attributeService.findOne(id);
    return plainToInstance(AttributeResponseDto, attribute, {
      excludeExtraneousValues: true,
      groups: ['admin'],
    });
  }

  @Get('by-category/:id')
  @ApiOperation({ summary: 'Get attributes by category ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, type: [AttributeResponseDto] })
  async findByCategory(@Param('id', ParseIntPipe) id: number): Promise<AttributeResponseDto[]> {
    const attributes = await this.attributeService.findByCategory(id);
    return attributes.map((attribute) =>
      plainToInstance(AttributeResponseDto, attribute, {
        excludeExtraneousValues: true,
        groups: ['admin'],
      }),
    );
  }

  @Get('by-product/:id')
  @ApiOperation({ summary: 'Get attributes by product ID' })
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, type: [AttributeResponseDto] })
  async findByProduct(@Param('id', ParseIntPipe) id: number): Promise<AttributeResponseDto[]> {
    const attributes = await this.attributeService.findByProduct(+id);
    return attributes.map((attribute) =>
      plainToInstance(AttributeResponseDto, attribute, {
        excludeExtraneousValues: true,
        groups: ['admin'],
      }),
    );
  }
}
