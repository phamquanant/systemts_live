import { Controller, Get } from '@nestjs/common';
import { StatisticalService } from './statistical.service';
import { ApiTags } from '@nestjs/swagger';
@ApiTags("Statistical")
@Controller('statistical')
export class StatisticalController {
  constructor(private readonly statisticalService: StatisticalService) {}

  @Get()
  getrefund(){
    return "refund monney"
  }
}
