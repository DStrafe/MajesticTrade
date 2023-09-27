import { OnModuleInit } from '@nestjs/common';

export class AuthService implements OnModuleInit {
  onModuleInit(): any {
  }

  async hello(data): Promise<string> {
    console.log('1')
    return `Hello World from microservice! ${data}`
  }

}