import { Expose } from "class-transformer";

export class ProductCategoryResponseDto {
    @Expose()
    id: number;

    @Expose()
    title: string;

    @Expose()
    langId: string;

    @Expose()
    slug: string;
}