import { Controller, Get, Param } from '@nestjs/common';
import { exec } from 'child_process'
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { ClientOptions, ClientProxy, ClientProxyFactory, EventPattern, MessagePattern, Transport } from '@nestjs/microservices';
@ApiTags('Home')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @MessagePattern({ cmd: 'hello' })
  getHello(): string {
    return this.appService.getHello();
  }
  @MessagePattern({ cmd: 'sum' })
  accumulate(data: number[]): number {
    return (data || []).reduce((a, b) => a + b);
  }
  //receive systeminfomation when an vps active
  @EventPattern('system_information')
  handleSystemInformation(data: any) {
    console.log('Received system information:', data);
    // You can add further processing or storage of the system information here
  }
  //send request to that vps
  @Get('send-message')
  async sendMessage() {
    //host and port is data get from database
    this.appService.setClientConfig('192.168.1.49', 3002);
    const message = 'Your message to send';
    return await this.appService.sendMessage(message);
  }
  @Get('ls')
  async executeCommand(): Promise<string> {
    return new Promise((resolve, reject) => {
      exec('choco --version', (error, stdout, stderr) => {
        if (error) {
          reject(error);
        } else {
          resolve(stdout);
        }
      });
    });
  }
}
