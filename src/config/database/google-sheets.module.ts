import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GoogleSheetsService } from './google-sheets.service';

@Module({
  imports: [HttpModule],
  providers: [GoogleSheetsService],
  exports: [GoogleSheetsService],
})
export class GoogleSheetsModule {}
