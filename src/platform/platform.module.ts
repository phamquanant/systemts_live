import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { PlatformService } from './platform.service';
import { PlatformController } from './platform.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { Platform } from '../entities/platform.entity';
import { diskStorage } from 'multer';
import { extname } from 'path';

const storage = diskStorage({
  destination: './uploads',
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = extname(file.originalname);
    callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

@Module({
  imports: [
    TypeOrmModule.forFeature([Platform]),
    MulterModule.register({
      storage
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'), // path to your uploads folder
      serveRoot: '/uploads', // the route at which static files will be served
    }),
  ],
  controllers: [PlatformController],
  providers: [PlatformService],
})
export class PlatformModule {}
