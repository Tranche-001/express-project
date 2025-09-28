import { Router } from "express";
import { renderIndexPage } from "../controllers/indexController.js";
import { render } from "ejs";

export const indexRouter = Router();


indexRouter.get("/", renderIndexPage);