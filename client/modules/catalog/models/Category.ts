import { CategoryContent } from "@/modules/catalog/models/CategoryContent";

export type Category = {
  id: number;
  isActive: boolean;
  code: string;
  parentId?: number | null;
  categoryContent: CategoryContent[];
  createdAt: Date;
  updateddAt: Date;
};
