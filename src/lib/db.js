import mysql from "mysql2/promise";

let pool;

function getDbConfig() {
  return {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "dezyonstudio",
    port: Number(process.env.DB_PORT || 3306),
  };
}

export function isDbConfigured() {
  const { host, user, database } = getDbConfig();
  return Boolean(host && user && database);
}

export function getDb() {
  if (!pool) {
    const config = getDbConfig();

    pool = mysql.createPool({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
      port: config.port,
      waitForConnections: true,
      connectionLimit: 10,
      connectTimeout: 10000,
    });
  }

  return pool;
}

export async function ensureContactsTable() {
  const db = getDb();

  await db.execute(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      full_name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      subject VARCHAR(255) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
}
