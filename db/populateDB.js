#! /usr/bin/env node

import {Client} from "pg";
import * as dotenv from 'dotenv';
dotenv.config();


const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  text VARCHAR ( 255 ),
  added DATE
);

INSERT INTO messages (username, text, added) 
VALUES
  ('Amando', 'Hi there!', '2003-10-24'),
  ('Charles', 'Hello World!', '2004-10-24'),
  ('Nomad', 'Does anyone know how to fix this?', '2025-10-01');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_CONNECT_STRING_EXTERNAL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
} ""

main();
