import { Media } from "@/modules/media/models/Media";
import { CreateProductDto } from "./CreateProductDto";

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