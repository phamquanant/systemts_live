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
} from '@nestjs/common';
import { PlatformService } from './platform.service';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { UpdatePlatformDto } from './dto/update-platform.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
@ApiTags('Platform')
@Controller('platform')
export class PlatformController {
  constructor(private readonly platformService: PlatformService) {}
  @ApiOperation({summary:"create"})
  @Post("/create")
  create(@Body() createPlatformDto: CreatePlatformDto) {
    return this.platformService.create(createPlatformDto);
  }
  @ApiOperation({summary:"list"})
  @Get("/list")
  findAll() {
    return this.platformService.findAll();
  }
  @ApiOperation({summary:"detail"})
  @Get('/detail/:id')
  findOne(@Param('id') id: string) {
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
    return this.platformService.remove(+id);
  }

  @Post("/upload")
  @UseInterceptors(FileInterceptor('file')) // 'file' is the name of the field in the form data
  uploadFile(@UploadedFile() file) {
    console.log(file); // This will contain the file metadata
    // Handle file processing, e.g., save file info to database, etc.
    return { filename: file.filename }; // Respond with uploaded file details
  }
}
