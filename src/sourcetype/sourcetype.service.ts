import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Source_Type } from 'src/entities/source_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SourcetypeService {
    constructor(
        @InjectRepository(Source_Type)
        private soucretypeRepository: Repository<Source_Type>,
      ) {}
}
