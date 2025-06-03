import { Expose } from "class-transformer";

export class ProductContentResponseDto {
  @Expose()
  title: string;

  @Expose()
  slug: string;

  @Expose()
  description: string;

  @Expose()
  langId: string;
}