import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 3000;

export const DB_MYSQL_HOST = process.env.DB_MYSQL_HOST || "localhost";
export const DB_MYSQL_DATABASE = process.env.DB_MYSQL_DATABASE || "node-mysql";
export const DB_MYSQL_USERNAME = process.env.DB_MYSQL_USERNAME || "beto";
export const DB_MYSQL_PASSWORD = process.env.DB_MYSQL_PASSWORD || "x";
export const DB_MYSQL_PORT = process.env.DB_MYSQL_PORT || 3306;
