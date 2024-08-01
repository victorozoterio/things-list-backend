import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { GoogleSheetsModule } from '../../config/database/google-sheets.module';

@Module({
  imports: [GoogleSheetsModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
