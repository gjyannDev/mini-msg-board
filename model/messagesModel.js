import { pool } from "../services/db/pool.js";

export async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");

  return result.rows;
}
