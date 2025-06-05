import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { ClientOrderController } from './controllers/client-order.controller';
import { AdminOrderController } from './controllers/admin-order.controller';

@Module({
  controllers: [ClientOrderController, AdminOrderController],
  providers: [OrderService],
})
export class OrderModule {}
