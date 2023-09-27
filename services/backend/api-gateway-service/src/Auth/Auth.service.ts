import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  AUTHORIZATION_SERVICE_NAME,
  AuthorizationClient,
} from './auth.pb';
import { LoginDto, RegisterDto, UserAuthDto } from './dto/auth.dto';

@Injectable()
export class AuthService implements OnModuleInit {
  private svc: AuthorizationClient;

  @Inject(AUTHORIZATION_SERVICE_NAME)
  private readonly grpcAuthClient: ClientGrpc;

  public onModuleInit(): void {
    console.log(this.grpcAuthClient.getClientByServiceName<AuthorizationClient>(
      AUTHORIZATION_SERVICE_NAME,
    ))
    this.svc = this.grpcAuthClient.getService<AuthorizationClient>(
      AUTHORIZATION_SERVICE_NAME,
    );
  }

  public async hello(RegisterDto: RegisterDto): Promise<string> {
    console.log(this.svc)
    return firstValueFrom(this.svc.hello(RegisterDto));
  }

  public signUp(RegisterDto: RegisterDto): Promise<UserAuthDto> {
    return firstValueFrom(this.svc.signUp(RegisterDto));
  }

  public signIn(singInResponse: LoginDto): Promise<string> {
    return firstValueFrom(this.svc.signIn(singInResponse));
  }

  public refresh(request: string): Promise<string> {
    return firstValueFrom(this.svc.refresh(request));
  }
}