import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './entities/task.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly repository: Repository<TaskEntity>,
  ) {}

  async create(dto: CreateTaskDto, priority: string) {
    const task = this.repository.create({ ...dto, priority });
    return await this.repository.save(task);
  }

  async findAll() {
    return this.repository.find();
  }

  async update(uuid: string, dto: UpdateTaskDto) {
    const task = await this.repository.findOneBy({ uuid });
    if (!task) throw new NotFoundException('Task does not exists.');
    this.repository.merge(task, { ...dto });
    return this.repository.save(task);
  }

  async changeStatus(uuid: string) {
    const task = await this.repository.findOneBy({ uuid });
    if (!task) throw new NotFoundException('Task does not exists.');
    this.repository.merge(task, { isDone: !task.isDone });
    return this.repository.save(task);
  }

  async remove(uuid: string) {
    const task = await this.repository.findOneBy({ uuid });
    if (!task) throw new NotFoundException('Task does not exists.');
    return this.repository.remove(task);
  }
}
