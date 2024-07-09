import { ApiProperty } from '@nestjs/swagger';
import { TaskPriority } from 'src/utils/enums';

export class TaskDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ enum: TaskPriority })
  priority: TaskPriority;

  @ApiProperty({ default: false })
  isDone: boolean;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
