import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ClientCategoryController } from './controllers/client-category.controller';
import { AdminCategoryController } from './controllers/admin-category.controller';

@Module({
  controllers: [ClientCategoryController, AdminCategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
