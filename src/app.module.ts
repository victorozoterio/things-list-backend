import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './modules/tasks/tasks.module';
import { GoogleSheetsModule } from './config/database/google-sheets.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HttpModule,
    TasksModule,
    GoogleSheetsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
