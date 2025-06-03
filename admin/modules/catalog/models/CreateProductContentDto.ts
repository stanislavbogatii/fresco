export type CreateProductContentDto = {
    title: string;
    slug: string;
    description?: string;
    instructions?: string;
    storage_conditions?: string;
    ingredients?: string;
    langId: string;
}