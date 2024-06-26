import { Module } from '@nestjs/common';
import { VpsService } from './vps.service';
import { VpsController } from './vps.controller';

@Module({
  controllers: [VpsController],
  providers: [VpsService],
})
export class VpsModule {}
