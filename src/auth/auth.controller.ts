import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthPayloadDto } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { LocalGuard } from './guards/local.guard';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';
import { ApiTags, ApiBody, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
@ApiBearerAuth()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  @ApiOperation({ summary: 'Log in with username and password' })
  @ApiBody({ type: AuthPayloadDto })
  @ApiResponse({ status: 200, description: 'Login successful' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  login(@Req() req: Request) {
    return req.user;
  }

  @Get('status')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Get authentication status' })
  @ApiResponse({ status: 200, description: 'User authenticated' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  status(@Req() req: Request) {
    console.log('Inside AuthController status method');
    console.log(req.user);
    return req.user;
  }
}
