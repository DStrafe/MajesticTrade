import { Controller, UseFilters } from '@nestjs/common';
import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './Auth.service';
import { AUTHORIZATION_SERVICE_NAME } from './Auth.pb';
import { RpcExceptionFilter } from '../utils/exceptions';
import { RegisterDto } from './dto/auth.dto';


@Controller()
export class AuthController {
  constructor(private AuthService: AuthService) {
  }


  @GrpcMethod(AUTHORIZATION_SERVICE_NAME, 'hello')
  @UseFilters(RpcExceptionFilter.for('AuthController::signUp'))
  async hello(data: any, metadata: Metadata, call: ServerUnaryCall<any, any>): Promise<RegisterDto> {
    return this.AuthService.hello(data);
  }
}