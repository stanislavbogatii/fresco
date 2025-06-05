import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { OrderService } from '../order.service';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guard';
import { GetUser } from 'src/auth/decorator';
import { User } from '@prisma/client';

@ApiTags('orders')
@Controller('orders')
@ApiBearerAuth()
@UseGuards(JwtGuard)
export class ClientOrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  @ApiOperation({summary: "Create order"})
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: "Order has been created"
  })
  @ApiResponse({
    status: 401, 
    description: "Unauthorized - Token missing or invalid"
  })
  async create(
    @GetUser() user: User
  ) {
    return this.orderService.createOrder(user.id);
  }

  @Get()
  @ApiOperation({summary: "Get orders"})
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Order has been created"
  })
  @ApiResponse({
    status: 401, 
    description: "Unauthorized - Token missing or invalid"
  })
  async getAll(
    @GetUser() user: User
  ) {
    return this.orderService.getOrders(user.id);
  }
}
