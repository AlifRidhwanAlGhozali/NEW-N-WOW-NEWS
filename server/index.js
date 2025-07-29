import express from "express";
import cors from "cors";
import newsRoutes from "./routes/news.js";
import userRoutes from "./routes/user.js";
import commentRoutes from "./routes/comments.js";
import categoryRoutes from "./routes/categories.js";

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/news", newsRoutes);

app.use("/api/", userRoutes); 

app.use("/api/comments", commentRoutes);


app.use("/api/categories", categoryRoutes);

// Route untuk root
app.get("/", (req, res) => {
  res.send("Backend API berjalan! Silakan akses endpoint /api/news, /api/user, dll.");
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
