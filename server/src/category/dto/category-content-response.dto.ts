import { Expose } from "class-transformer";

export class CategoryContentResponseDto {
    @Expose()
    id: number;

    @Expose()
    categoryId: number;

    @Expose()
    title?: string;
    
    @Expose()
    description?: string;
    
    @Expose()
    slug?: string;
    
    @Expose()
    langId: string;
}