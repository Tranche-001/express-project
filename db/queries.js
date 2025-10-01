import { pool } from "./pool.js";

export const queries = (() => {

  const getAllMessagesDB = async () => {
    const users = await pool.query("SELECT * FROM messages");
    return users;
  }
  const updateMessageDB = async (messageUser, messageText) => {
    // Convert to ISO string and extract just the date part (YYYY-MM-DD)
    const today = new Date().toISOString().split('T')[0];
    await pool.query("INSERT INTO messages (username, text, added) VALUES ($1, $2, CURRENT_DATE)", [messageUser, messageText]);
  }

  return { getAllMessagesDB, updateMessageDB }
})();