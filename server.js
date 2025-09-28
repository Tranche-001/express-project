import express from "express"
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';
import {newRouter} from "./routes/newRouter.js"
import { indexRouter } from "./routes/indexRouter.js";
dotenv.config();
const PORT = process.env.PORT;

const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Usage of ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//Enabling css
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use("/new", newRouter);
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if(error) {
    throw error;
  }
  console.log(`Express app - listening on port ${PORT}`)
})




