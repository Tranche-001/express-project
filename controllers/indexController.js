import { queries } from "../db/queries.js";
import { messages } from "../models/db.js";

export const renderIndexPage = async (req, res) => {
  const { rows } = await queries.getAllMessagesDB();
  console.log(rows);
  res.render("index",  { title: "Mini Messageboard", messages: rows });
}