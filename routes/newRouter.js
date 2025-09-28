import { Router } from "express";
import { renderFormPage, updateMessageData } from "../controllers/newController.js";

export const newRouter = Router();

newRouter.get("/", renderFormPage);
newRouter.post("/", updateMessageData);