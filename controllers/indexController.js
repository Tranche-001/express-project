import { messages } from "../models/db.js";

export const renderIndexPage = (req, res) => {
  res.render("index",  { title: "Mini Messageboard", messages: messages });
}