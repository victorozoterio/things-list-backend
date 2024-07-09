import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskPriority } from 'src/utils/enums';

export class UpdateTaskDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @IsEnum(TaskPriority)
  @ApiProperty({ enum: TaskPriority })
  @IsOptional()
  priority: TaskPriority;
}
