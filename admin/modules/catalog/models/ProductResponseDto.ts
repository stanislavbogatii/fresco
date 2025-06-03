import { CreateProductDto } from "./CreateProductDto";
import { Media } from "./Media";

export interface ProductResponseDto extends CreateProductDto {
  id: number;
  category?: ProductCategoryResponseDto;
  images?: Media[];
  thumbImage?: Media;
}

interface ProductCategoryResponseDto {
  id: number;
  title: string;
  slug: string;
  langId: string;
}