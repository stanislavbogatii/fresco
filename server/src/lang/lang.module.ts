import { Module } from '@nestjs/common';
import { LangService } from './lang.service';
import { ClientLangController } from './controllers/client-lang.controller';
import { AdminLangController } from './controllers/admin-lang.controller';

@Module({
  controllers: [ClientLangController, AdminLangController],
  providers: [LangService],
})
export class LangModule {}
