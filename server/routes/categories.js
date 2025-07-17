import express from "express";
import db from "../db.js";

const router = express.Router();

// Kalau kamu taruh di routes/news.js, tambahkan ini di bawah route lain
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.execute("SELECT * FROM categories ORDER BY name ASC");
    res.json(rows);
  } catch (err) {
    console.error("Gagal mengambil kategori:", err);
    res.status(500).json({ error: "Gagal mengambil kategori" });
  }
});
export default router;