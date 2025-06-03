import { CreateCategoryContentDto } from "./CreateCategoryContentDto";

export type CreateCategoryDto = {
  id: number;
  isActive: boolean;
  code: string;
  parentId?: number | null;
  contents: CreateCategoryContentDto[];
  createdAt: Date;
  updateddAt: Date;
};
