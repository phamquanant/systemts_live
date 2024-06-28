import { Module } from '@nestjs/common';
import { SourcetypeService } from './sourcetype.service';
import { SourcetypeController } from './sourcetype.controller';
import { Source_Type } from 'src/entities/source_type.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    TypeOrmModule.forFeature([Source_Type]),
  ],
  controllers: [SourcetypeController],
  providers: [SourcetypeService],
})
export class SourcetypeModule {}
