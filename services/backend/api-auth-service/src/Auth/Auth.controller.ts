import { Controller, UseFilters } from '@nestjs/common';
import { AuthService } from './Auth.service';
import { GrpcMethod } from '@nestjs/microservices';
import { AUTHORIZATION_SERVICE_NAME } from './Auth.pb';
import { RpcExceptionFilter } from '../utils/exceptions';


@Controller('Authorization')
export class AuthController {
  constructor(private AuthService: AuthService) {
  }


  @GrpcMethod(AUTHORIZATION_SERVICE_NAME,'hello')
  //@UseFilters(RpcExceptionFilter.for('AuthController::signUp'))
  async signUp(data): Promise<string> {
    return this.AuthService.hello(data);
  }
}