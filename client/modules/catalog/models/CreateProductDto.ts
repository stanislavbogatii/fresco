import { Media } from "./Media";
import { ProductContent } from "./ProductContent";

export type CreateProductDto = {
  price: number;
  article: string;
  companyId: number;
  codeRef: string;
  oldPrice?: number;
  categoryId: number;
  contents: ProductContent[];
  thumbImage?: Media;
  images?: Media[];
};
