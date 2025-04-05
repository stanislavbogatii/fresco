import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";

export class ProductContentDto {
    @ApiProperty({
        example: "Product title"
    })
    @IsOptional()
    @IsString()
    title: string;

    @ApiProperty({
        example: "product-title"
    })
    @IsOptional()
    @IsString()
    slug: string;

    @ApiProperty({
        example: "Product description"
    })
    @IsOptional()
    @IsString()
    description: string;

    @ApiProperty({
        example: "en"
    })
    @IsOptional()
    @IsString()
    langId: string;
}