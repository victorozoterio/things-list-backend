import { ApiProperty } from '@nestjs/swagger';
import { TaskPriority } from '../../../utils/enums';

export class CreateTaskResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  priority: TaskPriority;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
