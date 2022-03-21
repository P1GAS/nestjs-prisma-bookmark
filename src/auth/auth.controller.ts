import {
  Body,
  Controller,
  HttpCode,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  register(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @HttpCode(200)
  @Post('signin')
  login(@Body() dto: AuthDto) {
    return this.authService.signin(dto);
  }
}
