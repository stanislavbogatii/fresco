export type CartItemResponseDto = {
    id: number;
    productId: number;
    quantity: number;
    productTitle: string;
    productPrice: number;
    productSlug: string;
    productThumbnail?: string;
}