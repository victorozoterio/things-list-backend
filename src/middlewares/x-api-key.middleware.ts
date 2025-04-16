import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Environments } from '../utils';

@Injectable()
export class XApiKeyMiddleware implements NestMiddleware {
  async use(req: Request, _res: Response, next: NextFunction) {
    if (
      process.env.NODE_ENV !== Environments.DEV &&
      req.headers['x-api-key'] !== process.env.X_API_KEY
    ) {
      console.info('Invalid X-API-Key.');
      throw new UnauthorizedException('Invalid X-API-Key.');
    }

    next();
  }
}
