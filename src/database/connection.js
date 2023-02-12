import { createPool } from "mysql2/promise";

import {
  DB_MYSQL_DATABASE,
  DB_MYSQL_PORT,
  DB_MYSQL_USERNAME,
  DB_MYSQL_PASSWORD,
  DB_MYSQL_HOST,
} from "../../config.js";

const pool = createPool({
  host: DB_MYSQL_HOST,
  user: DB_MYSQL_USERNAME,
  password: DB_MYSQL_PASSWORD,
  database: DB_MYSQL_DATABASE,
  port: DB_MYSQL_PORT,
});

export default pool;
