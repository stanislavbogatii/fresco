import { Expose } from "class-transformer";
import { CartItemResponseDto } from "./cart-item-response.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CartResponseDto {
    @Expose()
    @ApiProperty()
    id: number;

    @Expose()
    @ApiProperty({type: [CartItemResponseDto]})
    items: CartItemResponseDto[]
}