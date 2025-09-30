import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AUTH_PACKAGE_NAME } from '@intergalactic-chat/grpc-protos'; // Import from our package

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: AUTH_PACKAGE_NAME,
        protoPath: join(
          __dirname,
          '../../../packages/grpc-protos/protos/auth.proto',
        ),
        url: '0.0.0.0:50051',
      },
    },
  );
  await app.listen();
  console.log('Auth microservice is listening on port 50051');
}
bootstrap();