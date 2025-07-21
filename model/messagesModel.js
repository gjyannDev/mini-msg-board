import { pool } from "../services/db/pool.js";

export async function getAllMessages() {
  const result = await pool.query("SELECT * FROM messages");

  return result.rows;
}

export async function addNewMessage() {
  const result = await pool.query(
    "INSERT INTO messages (message, user_name) VALUES ('Hello Wolrd', 'giyann');"
  );

  return result;
}
