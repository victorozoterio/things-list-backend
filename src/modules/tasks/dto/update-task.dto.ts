import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Priority } from '../../../utils';

export class UpdateTaskDto {
  @IsString()
  @ApiProperty()
  @IsOptional()
  name: string;

  @IsEnum(Priority)
  @ApiProperty({ enum: Priority })
  @IsOptional()
  priority: Priority;
}
