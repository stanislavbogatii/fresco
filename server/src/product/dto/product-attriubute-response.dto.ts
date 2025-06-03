import { Expose } from "class-transformer";

export class ProductAttributeResponseDto {
  @Expose()
  id: number;

  @Expose()
  value: string;
}