import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskPriority } from '../../../utils/enums';

export class CreateTaskDto {
  @IsString()
  @ApiProperty()
  name: string;

  uuid: string;
  created_at: string;
  updated_at: string;
}

export class CreateTaskQueryDto {
  @IsEnum(TaskPriority)
  @ApiProperty()
  @IsOptional()
  priority: TaskPriority;
}
