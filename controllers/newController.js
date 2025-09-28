import { messages } from "../models/db.js"

export const renderFormPage = (req, res) => {
  res.render("form")
}

export const updateMessageData = (req, res) => {
  const {messageUser, messageText} = req.body;
  messages.push({user: messageUser, text: messageText, date: new Date()});
}