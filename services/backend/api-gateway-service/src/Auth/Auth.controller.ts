import { Body, Controller, Get, Post, UseFilters } from '@nestjs/common';
import { RpcExceptionFilter } from '../utils/GRPCExcreption.filter';
import { LoginDto, RegisterDto, UserAuthDto } from './dto/auth.dto';
import { AuthorizationToken } from './Auth.pb';
import { AuthService } from './Auth.service';


@Controller('auth')
@UseFilters(RpcExceptionFilter)
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('hello')
  async helloWorld (@Body() RegisterDto:RegisterDto,) {
    return this.authService.hello(RegisterDto)
  }

  @Post('signUp')
  async singUp(
    @Body() RegisterDto:RegisterDto,
  ): Promise<UserAuthDto> {
    return this.authService.signUp(RegisterDto)
  }

  @Post('/signIn')
  async singIn(
    @Body() LoginDto:LoginDto,
  ): Promise<string> {
    return this.authService.signIn(LoginDto)
  }

  @Post('/refresh')
  async refresh(
    @Body() Token:string,
  ): Promise<string> {
    return this.authService.refresh(Token)
  }
}