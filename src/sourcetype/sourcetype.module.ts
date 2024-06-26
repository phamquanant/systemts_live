import { Module } from '@nestjs/common';
import { SourcetypeService } from './sourcetype.service';
import { SourcetypeController } from './sourcetype.controller';

@Module({
  controllers: [SourcetypeController],
  providers: [SourcetypeService],
})
export class SourcetypeModule {}
