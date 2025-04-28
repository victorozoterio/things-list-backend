import { ApiProperty } from '@nestjs/swagger';
import { Priority } from '../../../utils';

export class TaskDto {
  @ApiProperty()
  uuid: string;

  @ApiProperty()
  name: string;

  @ApiProperty({ enum: Priority })
  priority: Priority;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
