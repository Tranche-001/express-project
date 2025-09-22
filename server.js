import express from "express"
import * as dotenv from 'dotenv';
import {newRouter} from "./routes/newRouter.js"
import { indexRouter } from "./routes/indexRouter.js";
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use("/new", newRouter);
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if(error) {
    throw error;
  }
  console.log(`Express app - listening on port ${PORT}`)
})




