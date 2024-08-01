import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class GoogleSheetsService {
  private readonly endpoint: string = process.env.DB_SHEET;

  constructor(private readonly httpService: HttpService) {}

  async getTasks() {
    try {
      const response = await lastValueFrom(this.httpService.get(this.endpoint));
      return response.data;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve tasks', error.message);
    }
  }

  async addTask(task: any) {
    try {
      await lastValueFrom(this.httpService.post(this.endpoint, { data: [task] }));
    } catch (error) {
      throw new InternalServerErrorException('Failed to add task', error.message);
    }
  }

  async deleteTask(uuid: string) {
    try {
      await lastValueFrom(this.httpService.delete(`${this.endpoint}/uuid/${uuid}`));
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete task', error.message);
    }
  }
}
