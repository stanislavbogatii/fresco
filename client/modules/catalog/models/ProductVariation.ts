

import { Media } from "@/modules/media/models/Media";

export type ProductVariation = {
  id: number;
  name: string;
  slug: string;
  sku: string;
  gtin: string;
  price: number;
  thumbnail: Media;
  productImages: Media[];
  options: {
    [key: number]: string;
  };
};

export type AdminProductVariation = {
  id?: number;
  optionName: string;
  optionSku: string;
  optionGTin: string;
  optionPrice: number;
  optionThumbnail?: Media;
  optionImages?: Media[];
  optionValuesByOptionId: Record<number, string>;
};

export type Variantion = {
  id: number;
  name: string;
  slug: string;
  sku: string;
  gtin: string;
  price: number;
  thumbnail: Media;
  productImages: Media[];
  options: {
    [key: string]: string;
  };
};