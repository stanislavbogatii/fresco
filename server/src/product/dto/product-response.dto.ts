// dto/product-response.dto.ts
import { Expose, Type } from "class-transformer";
import { ProductAttributeResponseDto } from "./product-attriubute-response.dto";
import { ProductContentResponseDto } from "./product-content-response.dto";
import { ProductCategoryResponseDto } from "./product-category-response.dto";

export class MediaResponseDto {
  @Expose()
  id: number;

  @Expose()
  url: string;
}

export class ProductResponseDto {
  @Expose()
  id: number;

  @Expose()
  price: number;

  @Expose()
  article: string;

  @Expose()
  codeRef: string;

  @Expose()
  oldPrice?: number;

  @Expose()
  brand?: string;

  @Expose()
  origin_country?: string;

  @Expose()
  vat_rate?: number;

  @Expose()
  isActive: boolean;

  @Expose()
  companyId: number;

  @Expose()
  @Type(() => ProductContentResponseDto)
  contents: ProductContentResponseDto[];

  @Expose()
  @Type(() => ProductAttributeResponseDto)
  productAttribute: ProductAttributeResponseDto[];

  @Expose()
  @Type(() => MediaResponseDto)
  images?: MediaResponseDto[];

  @Expose()
  @Type(() => MediaResponseDto)
  thumbImage?: MediaResponseDto;

  @Expose()
  createdAt: Date;

  @Expose()
  @Type(() => ProductCategoryResponseDto)
  category: ProductCategoryResponseDto;

  updatedAt: Date;
}
