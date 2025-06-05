import { Media } from "@/modules/media/models/Media";
import { CreateProductDto } from "./CreateProductDto";

export interface ProductResponseDto extends CreateProductDto {
  id: number;
  category?: ProductCategoryResponseDto;
  images?: Media[];
  thumbImage?: Media;
  createdAt: Date;
}

interface ProductCategoryResponseDto {
  id: number;
  title: string;
  slug: string;
  langId: string;
}