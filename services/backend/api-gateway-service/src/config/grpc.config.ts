import { resolve } from 'node:path';
import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { AUTH_PACKAGE_NAME, AUTHORIZATION_SERVICE_NAME, protobufPackage } from '../Auth/Auth.pb';

export const grpcAuthOptions = {
  name: AUTHORIZATION_SERVICE_NAME,
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:50051',
    package: [AUTH_PACKAGE_NAME],
    protoPath: [
      resolve(__dirname, '../_proto/Auth/Auth._proto'),
    ],
    loader: {
      keepCase: true,
      longs: String,
      defaults: true,
      oneofs: true,
    },
  },
} as ClientProviderOptions;