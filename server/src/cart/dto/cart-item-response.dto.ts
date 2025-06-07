import { Expose } from "class-transformer";

export class CartItemResponseDto {
    @Expose()
    id: number;

    @Expose()
    productId: number;

    @Expose()
    quantity: number;
    
    @Expose()
    productTitle: string;

    @Expose()
    productPrice: number;

    @Expose()
    productThumbnail?: string;
}