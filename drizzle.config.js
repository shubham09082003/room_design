import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './config/schema.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_dAuh62KnJFUw@ep-mute-paper-a4oi6hhz-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
  },
});
