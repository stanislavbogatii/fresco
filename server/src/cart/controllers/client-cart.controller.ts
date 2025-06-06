import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, UseGuards, HttpStatus, HttpCode } from '@nestjs/common';
import { CartService } from '../cart.service';
import { AddToCartDto } from '../dto/add-to-cart.dto';
import { CartResponseDto } from '../dto/cart-response.dto';
import { plainToInstance } from 'class-transformer';
import { ApiTags, ApiOperation, ApiParam, ApiBody, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@ApiTags('carts')
@Controller('carts')
@ApiBearerAuth()
@UseGuards(JwtGuard)
export class ClientCartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({ summary: 'Add item to cart' })
  @ApiBody({ type: AddToCartDto })
  @ApiResponse({ status: 201, description: 'Item added successfully' })
  @Post('add')
  async add(
    @GetUser() user: User,
    @Body() dto: AddToCartDto
  ): Promise<void> {
    await this.cartService.addToCart(user.id, dto);
  }

  @ApiOperation({summary: "Update item quantity"})
  @ApiResponse({ status: 200, description: 'Item updated successfully' })
  @ApiResponse({ status: 404, description: 'Item not found' })
  @Patch('item/quantity')
  async updateItemQuantity(
    @GetUser() user: User,
    @Body() dto: AddToCartDto
  ): Promise<void> {
    await this.cartService.updateItemQuantity(user.id, dto);
  }

  @ApiOperation({ summary: 'Remove product from cart' })
  @ApiResponse({ status: HttpStatus.NO_CONTENT, description: 'Item deleted successfully' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Item not found' })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/item/:id')
  async delete(
    @GetUser() user: User,
    @Param('id', ParseIntPipe) id: number
  ): Promise<void> {
    await this.cartService.deleteItem(id);
  }

  @ApiOperation({ summary: 'Get user cart' })
  @ApiResponse({ status: 200, type: CartResponseDto })
  @Get()
  async getCart(
    @GetUser() user: User
  ): Promise<CartResponseDto> {
    const cart = await this.cartService.getCart(Number(user.id));
    return plainToInstance(
      CartResponseDto,
      {
        id: cart.id,
        items: cart.items.map((item) => ({
          id: item.id,
          productId: item.productId,
          quantity: item.quantity,
          productTitle: item.product.contents[0]?.title,
          productSlug: item.product.contents[0]?.slug,
          productPrice: item.product.price,
          productThumbnail: item.product.thumbImage?.url
        })),
      },
      { excludeExtraneousValues: true }
    );
  }
}
