import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { hashSync, compareSync } from 'bcryptjs';
@Injectable()
export class AppService {
  private client: ClientProxy;

  setClientConfig(host: string, port: number) {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host,
        port,
      },
    });
  }

  async sendMessage(data: string): Promise<string> {
    return await this.client.send({ cmd: 'message' }, data).toPromise();
  }
  getHello(): string {
    const pass = hashSync('hello');
    console.log("hello");
    
    return compareSync('hello', pass) ? 'ok' : 'no';
  }
}
