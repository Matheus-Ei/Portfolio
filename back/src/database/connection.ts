// Libraries
import pg from 'pg';
import dotenv from 'dotenv';

const { Pool } = pg;

dotenv.config();

const database = process.env.DATABASE_NAME;
const host = process.env.DATABASE_HOST;
const port = Number(process.env.DATABASE_PORT);
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;

const pool = new Pool({
  host,
  port,
  user,
  password,
  database,
  ssl: {
    rejectUnauthorized: false,
  },
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export const query = async (statement: string, values?: unknown[]) => {
  const client = await pool.connect();
  try {
    const response = await client.query(statement, values);
    return response.rows;
  } finally {
    client.release();
  }
};

export default pool;
