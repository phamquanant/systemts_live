import { Controller, Get } from '@nestjs/common';
import { SourcetypeService } from './sourcetype.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Source Type')
@Controller('sourcetype')
export class SourcetypeController {
  constructor(private readonly sourcetypeService: SourcetypeService) {}
  @Get()
  getHello(): string {
    return 'sourcetype';
  }
}
