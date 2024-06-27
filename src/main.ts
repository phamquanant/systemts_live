import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { ConfigService } from '@nestjs/config';
import { initializeTransactionalContext } from 'typeorm-transactional';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as basicAuth from 'express-basic-auth';
import 'dotenv/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  initializeTransactionalContext();

  const app = await NestFactory.create(AppModule);
  //setup configuration service
  const microservice =
    await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
      transport: Transport.TCP,
      options: {
        host: '192.168.1.49',
        port: 3001,
      },
    });

  microservice.listen().then(() => {
    console.log('Microservice is running');
  });

  //use validate
  app.useGlobalPipes(new ValidationPipe());

  app.enableCors({
    credentials: true,
    origin: true,
  });
  //setup basic to auth swagger
  app.use(
    ['/docs', '/docs-json'],
    basicAuth({
      challenge: true,
      // this is the username and password used to authenticate
      users: { admin: '12345' },
    }),
  );
  //set up swagger
  const config = new DocumentBuilder()
    .setTitle('System-live-server')
    .setDescription('The System-live-server API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT || 3002, () => {
    console.log(`Server running at port:${process.env.PORT}`);
  });
}
bootstrap();
