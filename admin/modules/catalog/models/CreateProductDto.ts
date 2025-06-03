import { CreateProductAttributeDto } from "./CreateProductAttributeDto";
import { CreateProductContentDto } from "./CreateProductContentDto";
import { CreateProductMediaDto } from "./CreateProductMediaDto";

export interface CreateProductDto {
  price: number;
  article: string;
  companyId: number;
  codeRef: string;
  oldPrice?: number;
  categoryId: number;
  contents: CreateProductContentDto[];
  attributes?: CreateProductAttributeDto[];
  thumbImage?: CreateProductMediaDto;
  images?: CreateProductMediaDto[];
};
