const fs = require("fs");
const mysql = require("mysql2/promise");

// Koneksi ke database
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "", // ganti sesuai db kamu
  database: "berita"
};

async function run() {
  const conn = await mysql.createConnection(dbConfig);

  // Baca file JSON
  const rawData = fs.readFileSync("./public/data/news.json", "utf-8");
  const newsList = JSON.parse(rawData);

  for (const news of newsList) {
    const [catRows] = await conn.execute("SELECT id FROM categories WHERE name = ?", [news.category]);
    if (catRows.length === 0) continue;

    const categoryId = catRows[0].id;

    // Simpan ke table news
    const [result] = await conn.execute(
      "INSERT INTO news (title, excerpt, image) VALUES (?, ?, ?)",
      [news.title, news.excerpt, news.image]
    );

    const newsId = result.insertId;

    // Hubungkan ke category-nya
    await conn.execute(
      "INSERT INTO news_categories (news_id, category_id) VALUES (?, ?)",
      [newsId, categoryId]
    );

    console.log(`Berhasil import: ${news.title}`);
  }

  await conn.end();
}

run();
