import { queries } from "../db/queries.js";
import { messages } from "../models/db.js"
import { validationResult, body } from "express-validator";

export const renderFormPage = (req, res) => {
  res.render("form")
}

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 20 characters.";
const textErr = "can't have more than 200 characters"


const validateUserInput = [
  body("messageUser").isAlpha().withMessage(`username ${alphaErr}`)
    .isLength({ min: 1, max: 20 }).withMessage(`username ${lengthErr}`)
    .escape(),
  body("messageText").optional({ checkFalsy: true }).isLength({ max: 200 }).withMessage(`Text ${textErr}`)
    .escape(),
]

export const updateMessageData = [
  validateUserInput,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("form", {
        errors: errors.array(),
      });
    }
    const { messageUser, messageText } = req.body;
    await queries.updateMessageDB(messageUser, messageText);
    res.redirect("/");
  }

];