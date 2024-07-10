import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';
import * as path from 'node:path';

export const databaseConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    url: configService.get('DB_URI'),
    entities: [path.join(__dirname, '/../modules/**/**/*.entity{.ts,.js}')],
    migrations: [path.join(__dirname, '/../migrations/*{.ts,.js}')],
    migrationsRun: true,
    synchronize: false,
  }),
};
