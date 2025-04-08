import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

export const db = drizzle(process.env.NEXT_PUBLIC_DATABASE_URL, {schema});



