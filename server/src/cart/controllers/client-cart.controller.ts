import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { CartService } from '../cart.service';
import { AddToCartDto } from '../dto/add-to-cart.dto';
import { CartResponseDto } from '../dto/cart-response.dto';
import { plainToInstance } from 'class-transformer';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('cart')
@Controller('cart')
export class ClientCartController {
  constructor(private readonly cartService: CartService) {}

  @Post(':userId/add')
  @ApiOperation({ summary: 'Add item to cart' })
  @ApiParam({ name: 'userId', type: Number, example: 1 })
  @ApiBody({ type: AddToCartDto })
  @ApiResponse({ status: 201, description: 'Item added successfully' })
  async add(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() dto: AddToCartDto
  ): Promise<void> {
    await this.cartService.addToCart(userId, dto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get user cart' })
  @ApiParam({ name: 'userId', type: Number, example: 1 })
  @ApiResponse({ status: 200, type: CartResponseDto })
  async getCart(
    @Param('userId') userId: string
  ): Promise<CartResponseDto> {
    const cart = await this.cartService.getCart(Number(userId));
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
  }
}
