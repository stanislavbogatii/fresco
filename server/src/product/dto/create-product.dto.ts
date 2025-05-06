import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString } from "class-validator";
import { ProductContentDto } from "./product-content.dto";
import { Transform, Type } from "class-transformer";

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
    companyId: number;
  
    @ApiProperty({
        example: [{
            title: "Product title",
            description: "Product description",
            slug: "product-slug",
            langId: "en"
        }]
    })
    @IsArray()
    contents: ProductContentDto[];

    @ApiProperty()
    @IsArray()
    @IsOptional()
    productImageMedias: Array<{id: number, url: string}>;

    @ApiProperty()
    @IsOptional()
    thumbnailMedia: {id: number, url: string};
}
