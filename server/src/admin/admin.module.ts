import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { CategoryModule } from 'src/category/category.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        UserModule,
        CategoryModule,
        AuthModule,
    ]
})
export class AdminModule {}
