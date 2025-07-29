// routes/comments.js
import express from "express";
import db from "../db.js";

const router = express.Router();

// GET: Ambil komentar berdasarkan news_id
router.get("/by-news-id/:newsId", async (req, res) => {
  const { newsId } = req.params;

  try {
    const [rows] = await db.query(
      "SELECT c.id, c.user_id, u.full_name AS user_name, c.comment, c.created_at FROM comments c JOIN users u ON c.user_id = u.id WHERE c.news_id = ? ORDER BY c.created_at ASC ",
      [newsId]
    );
    res.json(rows);
  } catch (err) {
    console.error("❌ Error mengambil komentar:", err);
    res.status(500).json({ error: "Gagal mengambil komentar" });
  }
});

// POST: Tambahkan komentar baru
router.post("/", async (req, res) => {
  const { news_id, user_id, comment } = req.body;

  if (!news_id || !user_id || !comment) {
    return res.status(400).json({ error: "Data komentar tidak lengkap" });
  }

  try {
    await db.query(
      "INSERT INTO comments (news_id, user_id, comment) VALUES (?, ?, ?)",
      [news_id, user_id, comment]
    );

    res.status(201).json({ message: "Komentar berhasil ditambahkan" });
  } catch (err) {
    console.error("❌ Error menambahkan komentar:", err);
    res.status(500).json({ error: "Gagal menambahkan komentar" });
  }
});

router.delete("/:commentId", async (req, res) => {
  const { commentId } = req.params;
  const { user_id } = req.body;

  try {
    // Pastikan hanya pemilik komentar yang bisa menghapus
    const [rows] = await db.query(
      "SELECT * FROM comments WHERE id = ? AND user_id = ?",
      [commentId, user_id]
    );

    if (rows.length === 0) {
      return res.status(403).json({ error: "Tidak diizinkan menghapus komentar ini." });
    }

    await db.query("DELETE FROM comments WHERE id = ?", [commentId]);
    res.json({ message: "Komentar berhasil dihapus" });
  } catch (err) {
    console.error("❌ Error menghapus komentar:", err);
    res.status(500).json({ error: "Gagal menghapus komentar" });
  }
});

export default router;
