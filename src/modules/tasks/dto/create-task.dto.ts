import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { Priority } from '../../../utils';

export class CreateTaskDto {
  @IsString()
  @ApiProperty()
  name: string;
}

export class CreateTaskQueryDto {
  @IsEnum(Priority)
  @ApiProperty()
  @IsOptional()
  priority: Priority;
}
