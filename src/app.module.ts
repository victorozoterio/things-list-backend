import { MiddlewareConsumer, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig, envConfig } from './config';
import { ConfigModule } from '@nestjs/config';
import { XApiKeyMiddleware } from './middlewares/x-api-key.middleware';
import { HealthzModule } from './modules/healthz/healthz.module';
import { TasksModule } from './modules/tasks/tasks.module';

@Module({
  imports: [
    ConfigModule.forRoot(envConfig),
    TypeOrmModule.forRootAsync(databaseConfig),
    HealthzModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(XApiKeyMiddleware).exclude('healthz').forRoutes('*');
  }
}
