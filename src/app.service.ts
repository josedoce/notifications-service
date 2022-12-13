import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getHoras(): string {
    return new Date().getDate().toLocaleString();
  }
}
