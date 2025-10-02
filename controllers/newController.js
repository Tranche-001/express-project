import { queries } from "../db/queries.js";
import { messages } from "../models/db.js"

export const renderFormPage = (req, res) => {
  res.render("form")
}

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";
const textErr = "can't have more than 200 characters"


const validateUserInput = [
  body("messageUser").isAlpha().withMessage(`username ${alphaErr}`)
    .isLength({ min: 1, max: 10 }).withMessage(`username${lengthErr}`)
    .escape(),
  body("messageText").optional({ checkFalsy: true }).isLength({ max: 200 }).withMessage(`Text ${textErr}`)
  .escape(),
]
export const updateMessageData = async (req, res) => {
  const { messageUser, messageText } = req.body;

  await queries.updateMessageDB(messageUser, messageText);
  res.redirect("/");
}