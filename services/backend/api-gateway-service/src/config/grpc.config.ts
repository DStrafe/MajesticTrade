import { resolve } from 'node:path';
import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { AUTH_PACKAGE_NAME, AUTHORIZATION_SERVICE_NAME } from '../Auth/Auth.pb';

export const grpcAuthOptions = {
  name: AUTHORIZATION_SERVICE_NAME,
  transport: Transport.GRPC,
  options: {
    url: process.env.GRPC_AUTH_SERVICE_HOST || '127.0.0.1:50051',
    package: [AUTH_PACKAGE_NAME],
    protoPath: [
      resolve(__dirname, '../_proto/Auth/Auth.proto'),
    ],
    loader: {
      keepCase: true,
      longs: String,
      defaults: true,
      oneofs: true,
    },
  },
} as ClientProviderOptions;