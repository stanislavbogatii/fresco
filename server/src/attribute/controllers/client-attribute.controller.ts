import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { AttributeService } from '../attribute.service';
import { ApiOperation, ApiResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { AttributeResponseDto } from '../dto/attribute-response.dto';

@ApiTags('attributes')
@Controller('attributes')
export class ClientAttributeController {
  constructor(private readonly attributeService: AttributeService) {}
  
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
