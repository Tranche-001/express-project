import { pool } from "./pool";

export const queries = (() => {

  const getAllMessagesDB = async () => {
    const users = await pool.query("SELECT * FROM messages");
    console.log(users);
  }
  const updateMessageDB = async (messageUser, messageText) => {
    const newUser = {username: messageUser, text: messageText, added: new Date()};
    await pool.query("INSERT INTO messages VALUES ($1)", [newUser]);
  }

  return {getAllMessagesDB, updateMessageDB}
})();