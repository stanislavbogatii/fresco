import { Media } from "@/modules/media/models/Media";
import { ProductContent } from "./ProductContent";

export type Product = {
  id: number;
  price: number;
  article: string;
  oldPrice?: number;
  categoryId: number;
  content: ProductContent;
  productContent?: ProductContent[];
  thumbImage?: Media;
  images?: Media[];
};
