import { CartItemResponseDto } from "./CartItemResponseDto";

export type CartResponseDto = {
    id: number;
    items: CartItemResponseDto[];
}