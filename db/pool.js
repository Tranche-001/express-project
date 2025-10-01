import {Pool} from "pg";
import { config } from "dotenv";
config();


// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
export const pool = new Pool({
  connectionString: process.env.DB_CONNECT_STRING_EXTERNAL
});


// Connection error handling
pool.on('error', (err) => {
  console.error('Database pool error:', err.message);
});