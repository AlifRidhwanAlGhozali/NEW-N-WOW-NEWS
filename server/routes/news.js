import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute(`
        SELECT
            news.id,
            news.title,
            news.excerpt,
            news.image,
            news.detail,
            GROUP_CONCAT(categories.name) AS categories,
            SUBSTRING_INDEX(GROUP_CONCAT(categories.name), ',', 1) AS category
        FROM news
        JOIN news_categories ON news.id = news_categories.news_id
        JOIN categories ON news_categories.category_id = categories.id
        GROUP BY news.id
        ORDER BY news.id DESC
        `);

    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  const { title, excerpt, image, detail, categories } = req.body;

  if (!title || !excerpt || !image || !detail || !categories || !categories.length) {
    return res.status(400).json({ error: "Semua field wajib diisi." });
  }

  try {
    // 1. Masukkan berita ke tabel `news`
    const [result] = await db.execute(
      "INSERT INTO news (title, excerpt, image, detail) VALUES (?, ?, ?, ?)",
      [title, excerpt, image, detail]
    );

    const newsId = result.insertId;

    // 2. Ambil ID kategori berdasarkan nama, lalu simpan ke tabel `news_categories`
    for (const catName of categories) {
      const [[cat]] = await db.execute("SELECT id FROM categories WHERE name = ?", [catName]);
      if (cat) {
        await db.execute(
          "INSERT INTO news_categories (news_id, category_id) VALUES (?, ?)",
          [newsId, cat.id]
        );
      }
    }

    res.json({ message: "Berita berhasil ditambahkan.", id: newsId });
  } catch (err) {
    console.error("Gagal tambah berita:", err);
    res.status(500).json({ error: "Gagal menambahkan berita." });
  }
});


export default router;
