import { Injectable } from '@nestjs/common';
import { hashSync, compareSync } from 'bcryptjs';
@Injectable()
export class AppService {
  getHello(): string {
    const pass = hashSync('hello');
    console.log("hello");
    
    return compareSync('hello', pass) ? 'ok' : 'no';
  }
}
