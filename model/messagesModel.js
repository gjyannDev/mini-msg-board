import { pool } from "../services/db/pool.js";

export async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");

  return result.rows;
}

export async function addMessage(message, userName) {
  const result = await pool.query(
    `INSERT INTO messages (message, user_name) VALUES ($1, $2)`,
    [message, userName]
  );

  return result;
}
