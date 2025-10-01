import { queries } from "../db/queries.js";
import { messages } from "../models/db.js";

export const renderIndexPage = async (req, res) => {
  const execute = await queries.getAllMessagesDB();
  res.render("index",  { title: "Mini Messageboard", messages: messages });
}