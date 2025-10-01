import {Pool} from "pg";
import { config } from "dotenv";
config();


// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
export const pool = new Pool({
  host: process.env.HOST, // or wherever the db is hosted
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DB_PORT // The default port
});


// Connection error handling
pool.on('error', (err) => {
  console.error('Database pool error:', err.message);
});