// routes/user.js
import multer from "multer";
import fs from "fs";
import express from "express";
import db from "../db.js";
import bcrypt from "bcrypt";
import path from "path";
import sharp from "sharp";

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const [results] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (results.length === 0) {
      return res.status(400).json({ error: "Email tidak ditemukan" });
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: "Password salah" });
    }
    
    const filename = `${user.id}.jpg`; // atau bisa juga cek png jika perlu
    const photoPath = path.join(process.cwd(), "../public/galeri", filename);
    const photoExists = fs.existsSync(photoPath);

    res.status(200).json({
      message: "Login berhasil",
      user: {
      id: user.id,
      is_admin: user.is_admin,
      photo: photoExists ? `/galeri/${user.id}.jpg` : null, // lokasi photo di folder publik/galeri/
      phone: user.phone,
      fullName: user.full_name,
      email: user.email
      }
    });
  } catch (err) {
    console.error("❌ Error saat login:", err);
    res.status(500).json({ error: "Terjadi kesalahan server." });
  }
});


router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  try {
    // Cek apakah email sudah digunakan
    const [existingUsers] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    );

    if (existingUsers.length > 0) {
      return res.status(400).json({ error: "Email sudah terdaftar" });
    }

    // Enkripsi password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Simpan user baru
    await db.query(
      "INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)",
      [fullName, email, hashedPassword]
    );

    res.status(201).json({ message: "Akun berhasil dibuat!" });
  } catch (err) {
    console.error("❌ Error saat signup:", err);
    res.status(500).json({ error: "Terjadi kesalahan server." });
  }
});



// Update user
router.put("/update", async (req, res) => {
  const {userId, email, fullName, phone} = req.body;

  try {
    // Update data user
    await db.query(
  "UPDATE users SET full_name = ?, phone = ? ,email = ? WHERE id = ?",
  [fullName, phone || "", email, userId]
);

    res.status(200).json({ message: "Profil berhasil diperbarui" });
  } catch (err) {
    console.error("❌ Error saat update profil:", err);
    res.status(500).json({ error: "Gagal memperbarui profil" });
  }
});

router.post("/upload-photo", upload.single("photo"), async (req, res) => {
  try {
    const { userId } = req.body;

    if (!req.file) return res.status(400).json({ error: "File tidak ditemukan" });
    if (!userId) return res.status(400).json({ error: "User ID tidak ada" });

    const outputPath = path.join(process.cwd(), "../public/galeri", `${userId}.jpg`);

    await sharp(req.file.buffer)
      .resize(300, 300) // opsional
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    res.json({ message: "Foto berhasil diupload", photo: `/galeri/${userId}.jpg` });
  } catch (err) {
    console.error("❌ Upload error:", err);
    res.status(500).json({ error: "Gagal upload foto" });
  }
});


export default router;
