import { Controller, Get, Post, Body, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskDto } from './dto/task.dto';
import { CreateTaskResponseDto } from './dto/create-task-response.dto';

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Creates a new task in the system.' })
  @ApiResponse({ status: 201, type: CreateTaskResponseDto })
  async create(@Body() dto: CreateTaskDto) {
    return this.tasksService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieves information about all tasks.' })
  @ApiResponse({ status: 200, type: TaskDto, isArray: true })
  async findAll() {
    return this.tasksService.findAll();
  }

  @Delete(':uuid')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletes a task from the system.' })
  async delete(@Param('uuid') uuid: string): Promise<void> {
    await this.tasksService.delete(uuid);
  }
}
