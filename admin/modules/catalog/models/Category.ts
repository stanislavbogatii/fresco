import { CategoryContent } from "./CategoryContent";

export type Category = {
  id: number;
  isActive: boolean;
  code: string;
  parentId?: number | null;
  categoryContent: CategoryContent[];
  createdAt: Date;
  updateddAt: Date;
};
