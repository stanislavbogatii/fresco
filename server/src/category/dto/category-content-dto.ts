import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsNotEmpty } from "class-validator";

export class CategoryContentDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    title?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    description?: string;
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    slug?: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    langId: string;
  }