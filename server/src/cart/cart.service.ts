import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Injectable()
export class CartService {
  constructor(private prisma: PrismaService) {}

  async addToCart(userId: number, dto: AddToCartDto): Promise<void> {
    const cart = await this.prisma.cart.upsert({
      where: { userId },
      create: { userId },
      update: {},
    });

    await this.prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: dto.productId,
        },
      },
      update: {
        quantity: { increment: dto.quantity },
      },
      create: {
        cartId: cart.id,
        productId: dto.productId,
        quantity: dto.quantity,
      },
    });
  }

    async updateItemQuantity(userId: number, dto: AddToCartDto): Promise<void> {
    const cart = await this.prisma.cart.upsert({
      where: { userId },
      create: { userId },
      update: {},
    });

    await this.prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: dto.productId,
        },
      },
      update: {
        quantity: dto.quantity,
      },
      create: {
        cartId: cart.id,
        productId: dto.productId,
        quantity: dto.quantity,
      },
    });
  }

  async getCart(userId: number) {
    return await this.prisma.cart.upsert({
      where: { userId },
      include: {
        items: {
          include: {
            product: {
              include: {
                contents: true,
                thumbImage: true
              },
            }
          },
        },
      },
      create: { userId },
      update: {}
    });
  }


  async deleteItem(id: number) {
    await this.prisma.cartItem.delete({where: {id}});
  }
  async delete(id: number) {
    await this.prisma.cartItem.deleteMany({where: {cartId: id}});
    await this.prisma.cart.delete({where: {id}});
  }

  async findAll() {
    return await this.prisma.cart.findMany({
      include: {
        items: {
          include: { 
            product: {
              include: {
                contents: true
              }
            } 
          },
        },
      },
    });
  }
}
