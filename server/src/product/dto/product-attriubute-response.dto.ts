import { Expose } from "class-transformer";

export class ProductAttributeResponseDto {
  @Expose()
  detailId: number;

  @Expose()
  value: string;
}