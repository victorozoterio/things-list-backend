import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { TaskPriority } from 'src/utils/enums';

export class CreateTaskDto {
  @IsString()
  @ApiProperty()
  name: string;
}

export class CreateTaskQueryDto {
  @IsEnum(TaskPriority)
  @ApiProperty()
  priority: TaskPriority;
}
