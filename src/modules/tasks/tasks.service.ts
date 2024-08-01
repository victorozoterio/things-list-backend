import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GoogleSheetsService } from '../../config/database/google-sheets.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  constructor(private readonly googleSheetsService: GoogleSheetsService) {}

  async create(dto: CreateTaskDto) {
    const newTask = {
      uuid: uuidv4(),
      name: dto.name,
      created_at: 'DATETIME',
    };
    await this.googleSheetsService.addTask(newTask);
    return newTask;
  }

  async findAll() {
    return await this.googleSheetsService.getTasks();
  }

  async delete(uuid: string) {
    await this.googleSheetsService.deleteTask(uuid);
  }
}
