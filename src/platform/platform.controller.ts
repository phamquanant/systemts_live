import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Query
} from '@nestjs/common';
import { PlatformService } from './platform.service';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { ApiBearerAuth, ApiBody, ApiConsumes, ApiOperation, ApiParam, ApiProperty, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { PlatformFilterDto } from './dto/filter-platform.dto';
@ApiTags('Platform')
@Controller('platform')
// @ApiBearerAuth()
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}
  @Post('create')
  @ApiOperation({ summary: 'Create a platform' })
  @ApiResponse({ status: 201, description: 'Platform created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Create Platform',
    type: 'multipart/form-data',
    required: true,
    schema: {
      type: 'object',
      properties: {
        icon: {
          type: 'string',
          format: 'binary',
        },
        // Add all properties of CreatePlatformDto here as needed
        name: { type: 'string' },
        
        // Add other fields
      },
    },
  })
  @UseInterceptors(FileInterceptor('icon'))
  create(
    //create controller
    @Body() createPlatformDto: CreatePlatformDto,
    @UploadedFile() icon: Express.Multer.File
  ) {
    return this.platformService.create(createPlatformDto, icon);
  }

  @ApiOperation({summary:"list"})
  //@UseGuards(JwtAuthGuard)

  @Get('/list')
  @ApiOperation({ summary: 'Get all platforms' })
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
    return this.platformService.findAll({search: keyword,limit: parseInt(limit), offset: parseInt(offset)});
  }
  @ApiOperation({summary:"detail"})
  @Get('/detail/:id')
  findOne(@Param('id') id: string) {
    //detail platform
    return this.platformService.findOne(+id);
  }

  @ApiOperation({summary:"update"})
  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() updatePlatformDto: UpdatePlatformDto,
  ) {
    return this.platformService.update(+id, updatePlatformDto);
  }

  @ApiOperation({summary:"delete"})
  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    //delete platform
    return this.platformService.remove(+id);
  }

  @Get("/image")
  loadImage(){
    return { url: '/uploads/icon-1719545702187-918230964.png' };
  }
}
