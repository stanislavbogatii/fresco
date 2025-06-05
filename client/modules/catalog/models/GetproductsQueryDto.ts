
export type GetProductsQueryDto = {
    categoryId?: number;
    companyId?: number;
    search?: string;
    page?: number;
    limit?: number;
}