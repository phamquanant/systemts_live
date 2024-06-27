import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { PlatformService } from './platform.service';
import { PlatformController } from './platform.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Platform } from './entities/platform.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Platform]),
    MulterModule.register({
      dest: './uploads', // Destination folder for uploaded files
    }),
  ],
  controllers: [PlatformController],
  providers: [PlatformService],
})
export class PlatformModule {}
