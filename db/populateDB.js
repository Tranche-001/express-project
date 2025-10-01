#! /usr/bin/env node

import Client from "pg";

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR ( 255 ),
  user VARCHAR ( 255 ),
  added DATE
);

INSERT INTO messages (text, user, added) 
VALUES
  ('Hi there!', 'Amando', '2003-10-24'),
  ('Hello World!', 'Charles', '2004-10-24'),
  ('Does anyone know how to fix this?' 'Nomad', '2025-10-01');
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
}

main();
