import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Things List')
  .setDescription('Documentação do app back-end do Things List.')
  .build();
