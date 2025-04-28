import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, CreateTaskQueryDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskDto } from './dto/task.dto';
import { CreateTaskResponseDto } from './dto/create-task-response.dto';
import { UpdateTaskResponseDto } from './dto/update-task-response.dto';
import { Priority } from '../../utils';

@Controller('tasks')
@ApiTags('Tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiOperation({ summary: 'Creates a new task in the system.' })
  @ApiResponse({ status: 201, type: CreateTaskResponseDto })
  @ApiQuery({ name: 'priority', enum: Priority, required: false })
  async create(@Body() dto: CreateTaskDto, @Query() queryDto: CreateTaskQueryDto) {
    return this.tasksService.create(dto, queryDto.priority);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieves information about all tasks.' })
  @ApiResponse({ status: 200, type: TaskDto, isArray: true })
  async findAll() {
    return this.tasksService.findAll();
  }

  @Patch(':uuid')
  @ApiOperation({ summary: 'Updates information of an existing task.' })
  @ApiResponse({ status: 200, type: UpdateTaskResponseDto })
  async update(@Param('uuid', new ParseUUIDPipe()) uuid: string, @Body() dto: UpdateTaskDto) {
    return this.tasksService.update(uuid, dto);
  }

  @Delete(':uuid')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletes a task from the system.' })
  remove(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    return this.tasksService.remove(uuid);
  }
}
