import { queries } from "../db/queries.js";
import { messages } from "../models/db.js"

export const renderFormPage = (req, res) => {
  res.render("form")
}

export const updateMessageData = async (req, res) => {
  const {messageUser, messageText} = req.body;
  await queries.updateMessageDB(messageUser, messageText);
  res.redirect("/");
}