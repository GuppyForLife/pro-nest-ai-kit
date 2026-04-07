import { Controller, Get, Inject } from '@nestjs/common';
import { DRIZZLE } from './db/db.module';
import { NeonHttpDatabase } from 'drizzle-orm/neon-http';
import * as schema from './db/schema';

@Controller()
export class AppController {
  constructor(@Inject(DRIZZLE) private db: NeonHttpDatabase<typeof schema>) {}

  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}
