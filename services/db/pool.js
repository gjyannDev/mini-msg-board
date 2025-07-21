import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const db_url = process.argv[2] || process.env.DATABASE_URL;

if (!db_url) {
  console.error("Database URL not provided");
  process.exit(1);
}

export const pool = new Pool({
  connectionString: db_url,
  ssl: {
    rejectUnauthorized: false,
  },
});
