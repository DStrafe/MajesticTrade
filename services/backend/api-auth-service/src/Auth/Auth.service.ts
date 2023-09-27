import { OnModuleInit } from '@nestjs/common';
import { RegisterDto } from './dto/auth.dto';

export class AuthService implements OnModuleInit {
  onModuleInit(): any {
  }

  async hello(data): Promise<RegisterDto> {
    return { email:'first', password:'second', name:'third' };
  }

}