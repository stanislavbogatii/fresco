import { ApiProperty } from "@nestjs/swagger";
import { ProductContent } from "@prisma/client";
import { IsArray, IsBoolean, isBoolean, IsNotEmpty, IsNumber, IsOptional } from "class-validator";

export class CreateProductDto {
    @ApiProperty({
        example: 10
    })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({
        example: 20
    })
    @IsNumber()
    @IsOptional()
    oldPrice?: number;

    @ApiProperty({
        example: true
    })
    @IsBoolean()
    @IsOptional()
    isActive: boolean 
  
    @ApiProperty({
        example: [{
            title: "Product title",
            description: "Product description",
            slug: "product-slug",
            langId: "en"
        }]
    })
    @IsArray()
    contents: ProductContent[]
}
