import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('To Do List')
  .setDescription('Documentação do app back-end do To Do List.')
  .build();
