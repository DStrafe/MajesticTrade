/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "user";

export interface Environment {
  env: string;
}

export interface AuthorizationLink {
  link: string;
}

export interface AuthorizationToken {
  token: string;
}

export interface VerifyResponse {
  isValid: boolean;
}

export interface SingInRequest {
  code: string;
  env: string;
}

export const USER_PACKAGE_NAME:string = "User";

export interface AuthorizationClient {
  signUp(request: string, metadata?: Metadata): Observable<string>;

  signIn(request: string, metadata?: Metadata): Observable<string | never>;

  refresh(request: string, metadata?: Metadata): Observable<string | never>;

  hello(RegisterDto: string): Observable<string>;
}

export interface AuthorizationController {
  signUp(
    request: Environment,
    metadata?: Metadata,
  ): Promise<AuthorizationLink> | Observable<AuthorizationLink> | AuthorizationLink;

  signIn(
    request: SingInRequest,
    metadata?: Metadata,
  ): Promise<AuthorizationToken> | Observable<AuthorizationToken> | AuthorizationToken;

  refresh(
    request: AuthorizationToken,
    metadata?: Metadata,
  ): Promise<VerifyResponse> | Observable<VerifyResponse> | VerifyResponse;

  hello(RegisterDto: string): Observable<string>;
}

export function AuthorizationControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["signUp", "signIn", "refresh", "hello"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("User", method)(constructor.prototype[method], method, descriptor);
    }

    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("User", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTHORIZATION_SERVICE_NAME = "UserService";
