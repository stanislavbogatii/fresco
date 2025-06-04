import { Module } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { ClientAttributeController } from './controllers/client-attribute.controller';
import { AdminAttributeController } from './controllers/admin-attribute.controller';

@Module({
  controllers: [ClientAttributeController, AdminAttributeController],
  providers: [AttributeService],
})
export class AttributeModule {}
