import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateProductContentDto } from "./create-product-content.dto";
import { Transform, Type } from "class-transformer";
import { CreateProductAttributeDto } from "./create-product-attribute.dto";


export class MediaDto {
    id: number;
    url: string;
}

export class CreateProductDto {
    @ApiProperty({
        example: '10'
    })
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    price: number;

    @ApiProperty({
        example: 'AD2392834D'
    })
    @IsString()
    @IsNotEmpty()
    article: string;

    @ApiProperty({
        example: '232323455'
    })
    @IsString()
    @IsNotEmpty()
    codeRef: string;

    @ApiProperty({
        example: 20
    })
    @IsOptional()
    @IsNumber()
    @Type(() => Number)
    oldPrice?: number;

    @IsOptional()
    @IsString()
    brand?: string

    @IsOptional()
    @IsString()
    origin_country?: string

    @IsOptional()
    @IsNumber()
    vat_rate?: number

    @ApiProperty({
        example: true
    })
    @IsBoolean()
    @IsOptional()
    isActive: boolean;

    @ApiProperty({
        example: "3"
    })
    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    companyId: number;

    @ApiProperty({
        example: "1"
    })
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    categoryId: number;
  
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateProductContentDto)
    contents: CreateProductContentDto[];
    
    @IsArray()
    @ValidateNested({ each: true })
    @IsOptional()
    @Type(() => CreateProductAttributeDto)
    attributes: CreateProductAttributeDto[];

    @ApiProperty()
    @IsArray()
    @IsOptional()
    @Type(() => MediaDto)
    images?: MediaDto[];

    @ApiProperty()
    @IsOptional()
    thumbImage?: MediaDto;
}




