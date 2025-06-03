export type CategoryContentResponseDto = {
  id: number;
  categoryId: number;
  title?: string;
  description?: string;
  slug?: string;
  langId: string;
  creadtedAt: Date;
  updatedAt: Date;
}