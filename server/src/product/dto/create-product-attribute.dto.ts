import { IsInt, IsString, IsNotEmpty } from "class-validator"

export class CreateProductAttributeDto {
  @IsInt()
  detailId: number

  @IsString()
  @IsNotEmpty()
  value: string
}