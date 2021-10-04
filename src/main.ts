import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  console.log(process.env.NODE_ENV);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

async function redisTest() {
  console.log(process.env.NODE_ENV);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        url: 'localhost:6379',
      },
    },
  );
}

bootstrap();
