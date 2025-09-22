import { Router } from "express";

export const newRouter = Router();

newRouter.get("/", (req, res) => res.send("anything new"));