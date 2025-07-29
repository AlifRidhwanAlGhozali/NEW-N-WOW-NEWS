import mysql from "mysql2/promise";

const db = await mysql.createPool({
  host: "localhost",
  user: "root",
  password: "", // sesuaikan
  database: "berita"
});

export default db;
