import { Controller, Get, Post, Body, Patch, Param, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get('/list')
  @ApiOperation({ summary: 'Get all user' })
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
    return this.userService.findAll({search: keyword,limit: parseInt(limit), offset: parseInt(offset)});
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
