import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'node:path';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { USER_PACKAGE_NAME } from './User/User.pb';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: '0.0.0.0:50007',
        package: [USER_PACKAGE_NAME], // AUTHORIZATION_SERVICE_NAME
        protoPath: [
          join(__dirname, '_proto/Auth/Auth._proto'),
        ],
        loader: {
          keepCase: true,
          longs: String,
          enums: String,
          defaults: true,
          oneofs: true,
        },
      },
    }
  )

  await app.listen();
}
bootstrap();
