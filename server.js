import express from "express"
import * as dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.listen(PORT, (error) => {
  if(error) {
    throw error;
  }
  console.log(`Express app - listening on port ${PORT}`)
})




