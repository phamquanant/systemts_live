import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { VpsService } from './vps.service';
import { CreateVpDto } from './dto/create-vp.dto';
import { UpdateVpDto } from './dto/update-vp.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('Vps')
@Controller('vps')
export class VpsController {
  constructor(private readonly vpsService: VpsService) {}

  @ApiOperation({
    summary:"add new vps"
  })
  @Post()
  create(@Body() createVpDto: CreateVpDto) {
    return this.vpsService.create(createVpDto);
  }
  @ApiOperation({
    summary:"list"
  })
  
  @Get('/list')
  @ApiOperation({ summary: 'Get all vps' })
  @ApiResponse({ status: 200, description: 'Returns all platforms.' })
  @ApiQuery({name: 'keyword', required: false})
  @ApiQuery({name: 'offset', required: false})
  @ApiQuery({name: 'limit', required: false})
  async findAll(
    @Query('language') language?: string,
    @Query('keyword') keyword?: string,
    @Query('offset') offset?: string,
    @Query('limit') limit?: string,
  ) {
    //list platform
    return this.vpsService.findAll({search: keyword,limit: parseInt(limit), offset: parseInt(offset)});
  }


  @ApiOperation({
    summary:"Detail"
  })
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.vpsService.findOne(+id);
  }
  @ApiOperation({
    summary:"update vps"
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVpDto: UpdateVpDto) {
    return this.vpsService.update(+id, updateVpDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.vpsService.remove(+id);
  // }
}
