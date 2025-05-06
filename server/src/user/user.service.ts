import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EditUserDto } from './dto'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(page?: number, limit?: number) {
    const skip = (page - 1) * limit;
    const customers = await this.prisma.user.findMany({
      skip, 
      take: limit,
      include: {
        profile: true,
        company: true
      }
    });
    const totalUser = await this.prisma.user.count();
    return {
      customers,
      totalUser,
      totalPage: Math.ceil(totalUser / limit)
    };
  }

  async editUser(
    userId: number,
    dto: EditUserDto,
  ) {
    const user = await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        profile: {
          update: dto
        }
      },
      include: {
        profile: true,
        company: true
      }
    });

    delete user.hash;

    return user;
  }
}