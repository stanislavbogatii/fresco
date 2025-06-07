import { IsInt, IsString, IsNotEmpty } from "class-validator"

export class CreateProductAttributeDto {
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty()
  value: string
}