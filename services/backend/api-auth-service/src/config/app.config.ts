import { registerAs } from '@nestjs/config';
import { logLevel } from '@nestjs/microservices/external/kafka.interface';

export default registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  name: process.env.APP_NAME,
  workingDirectory: process.env.PWD || process.cwd(),
  url: `${process.env.APP_IP}:${process.env.APP_PORT}` || '0.0.0.0:50051',
}));
