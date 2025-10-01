import { pool } from "./pool";

export const queries = (() => {


  const updateMessageDB = async (messageUser, messageText) => {
    const newUser = {username: messageUser, text: messageText, added: new Date()};
    await pool.query("INSERT INTO messages VALUES ($1)", [newUser]);
  }

  return {updateMessageDB}
})();