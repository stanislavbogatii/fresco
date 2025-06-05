import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { ClientCartController } from './controllers/client-cart.controller';
import { AdminCartController } from './controllers/admin-cart.controller';

@Module({
  controllers: [ClientCartController, AdminCartController],
  providers: [CartService],
})
export class CartModule {}
