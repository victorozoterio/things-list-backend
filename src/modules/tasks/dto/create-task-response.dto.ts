import { ApiProperty } from '@nestjs/swagger';
import { Priority } from '../../../utils';

export class CreateTaskResponseDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  priority: Priority;

  @ApiProperty()
  uuid: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
