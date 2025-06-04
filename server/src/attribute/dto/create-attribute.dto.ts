import { ApiProperty } from "@nestjs/swagger";
import { AttributeType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAttributeDto {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsEnum(AttributeType)
    type: AttributeType;

    @ApiProperty()
    @IsString()
    @IsOptional()
    optoins?: string;
}