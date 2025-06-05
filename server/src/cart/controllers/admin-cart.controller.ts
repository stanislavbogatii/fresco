import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CartService } from '../cart.service';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';
import { CartResponseDto } from '../dto/cart-response.dto';

@ApiTags('admin / carts')
@Controller('amdin/carts')
export class AdminCartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiOperation({ summary: 'Get all carts' })
  @ApiResponse({ status: 200, type: Array<CartResponseDto> })
  async getCart(): Promise<CartResponseDto[]> {
    const carts = await this.cartService.findAll();
    const mapped = carts.map(cart => {
      return plainToInstance(
        CartResponseDto,
        {
          id: cart.id,
          items: cart.items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            productTitle: item.product.contents[0]?.title,
            productPrice: item.product.price,
          })),
        },
        { excludeExtraneousValues: true }
      );
    });
    return mapped;
  }
}
