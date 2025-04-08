import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_PO8Ac6urnMLN@ep-little-union-a1yrrori-pooler.ap-southeast-1.aws.neon.tech/ai-interview-mocker?sslmode=require',
  },
});
