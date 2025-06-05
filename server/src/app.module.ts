import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { LangModule } from './lang/lang.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { MediaModule } from './media/media.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { CategoriesModule } from './admin/categories/categories.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule } from '@nestjs/core';
import { AttributeModule } from './attribute/attribute.module';
import { OrderModule } from './order/order.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
      exclude: ['/api*'],
    }),
    RouterModule.register([
      {
        path: 'admin',
        module: AdminModule,
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PrismaModule,
    LangModule,
    CategoryModule,
    ProductModule,
    MediaModule,
    CategoriesModule,
    AdminModule,
    AttributeModule,
    OrderModule,
    CartModule,
    
  ]
})
export class AppModule {}