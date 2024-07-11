import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { swaggerConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, swaggerConfig));
  await app.listen(process.env.PORT || 3000);
  const logger = new Logger('Bootstrap');
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
