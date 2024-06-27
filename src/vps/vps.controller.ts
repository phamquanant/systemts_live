import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VpsService } from './vps.service';
import { CreateVpDto } from './dto/create-vp.dto';
import { UpdateVpDto } from './dto/update-vp.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
  @Get("/list")
  findAll() {
    return this.vpsService.findAll();
  }


  @ApiOperation({
    summary:"Detail"
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
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
