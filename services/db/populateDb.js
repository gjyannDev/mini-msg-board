import { pool } from "./pool.js";

const seedMessages = [
  { message: "Hello from Mark!", user_name: "mark-san" },
  { message: "Another test!", user_name: "tester" },
];

async function seedDatabase() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        message TEXT NOT NULL,
        user_name TEXT NOT NULL,
        added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
      );
    `);

    for (const msg of seedMessages) {
      await pool.query(
        `INSERT INTO messages (message, user_name) VALUES ($1, $2)`,
        [msg.message, msg.user_name]
      );
    }

    console.log("✅ Seed successful!");
  } catch (err) {
    console.error("❌ Error populating:", err);
  } finally {
    await pool.end();
  }
}

seedDatabase();
