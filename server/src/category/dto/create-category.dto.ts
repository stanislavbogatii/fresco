import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { CategoryContentDto } from "./category-content-dto";

export class CreateCategoryDto {
  @ApiProperty({default: true})
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean = true;
  
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  code: string;
  
  @ApiProperty()
  @IsNumber()
  @IsOptional()
  parentId?: number;
  
  @ApiProperty({
    example: [{
      title: "Category title",
      description: "Category description",
      slug: "Category slug",
      langId: "en"
    }]
  })
  @IsArray()
  contents: CategoryContentDto[];
}


