import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
import PG from 'pg';

dotenv.config();


const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE } = process.env;

const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);

export default sql;
