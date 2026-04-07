import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  clerkId: text('clerk_id').notNull().unique(),
  tokenBalance: integer('token_balance').default(1000).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
