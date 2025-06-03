import { CategoryContentResponseDto } from "@/modules/catalog/models/CategoryContentResponseDto";

export type CategoryResponseDto = {
  id: number;
  isActive: boolean;
  code: string;
  parentId?: number | null;
  contents: CategoryContentResponseDto[];
  createdAt: Date;
  updateddAt: Date;
};
