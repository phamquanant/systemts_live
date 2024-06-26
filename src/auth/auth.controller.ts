import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('/api/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'login' })
  @Get('/login')
  login(): string {
    return 'login';
  }

  @ApiOperation({ summary: 'register' })
  @Post('/register')
  register(): string {
    return 'register';
  }

  @ApiOperation({ summary: 'refreshtoken' })
  @Post('/refreshtoken')
  refreshtoken(): string {
    return 'register';
  }
}
