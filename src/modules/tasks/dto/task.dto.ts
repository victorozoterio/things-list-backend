import { ApiProperty } from '@nestjs/swagger';
import { TaskPriority } from '../../../utils/enums';

export class TaskDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ enum: TaskPriority })
  priority: TaskPriority;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
