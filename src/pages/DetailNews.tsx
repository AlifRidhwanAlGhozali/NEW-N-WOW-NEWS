import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const DetailNews = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const news = location.state?.news;

  if (!news) {
    // Jika tidak ada data, kembali ke halaman utama
    navigate("/", { replace: true });
    return null;
  }

  // Contoh detail panjang untuk setiap kategori
  const detailContent: Record<string, string> = {
    "Teknologi": `
      Perkembangan teknologi AI di Indonesia semakin pesat. Banyak startup dan perusahaan besar mulai mengadopsi kecerdasan buatan untuk meningkatkan efisiensi dan inovasi produk mereka. Pemerintah juga mendukung pengembangan AI melalui berbagai program dan insentif. Salah satu contoh implementasi AI adalah dalam bidang kesehatan, di mana AI digunakan untuk mendiagnosis penyakit lebih cepat dan akurat. Selain itu, sektor pendidikan juga mulai memanfaatkan AI untuk personalisasi pembelajaran bagi siswa. Dengan kolaborasi antara akademisi, industri, dan pemerintah, Indonesia diharapkan mampu menjadi pemain utama dalam ekosistem AI di Asia Tenggara.
      
      Tantangan yang dihadapi antara lain adalah kurangnya talenta AI lokal dan kebutuhan akan regulasi yang jelas. Namun, dengan semakin banyaknya pelatihan dan workshop AI, diharapkan sumber daya manusia di bidang ini akan terus bertambah. Masa depan AI di Indonesia sangat cerah dan berpotensi membawa perubahan besar di berbagai sektor.
    `,
    "Olahraga": `
      Tim Nasional Indonesia berhasil melaju ke babak final setelah mengalahkan Malaysia dengan skor dramatis. Pertandingan berlangsung sengit sejak menit awal, dengan kedua tim saling menyerang. Gol kemenangan Indonesia dicetak pada menit-menit akhir babak kedua, membuat para pendukung bersorak gembira. Pelatih timnas mengapresiasi kerja keras para pemain dan berharap performa gemilang ini bisa dipertahankan di partai final.
      
      Selain itu, federasi sepak bola Indonesia juga menyoroti pentingnya pembinaan usia dini dan infrastruktur olahraga yang memadai. Dukungan dari pemerintah dan masyarakat sangat dibutuhkan agar prestasi olahraga Indonesia terus meningkat di kancah internasional. Final kali ini menjadi momentum penting untuk membangkitkan semangat olahraga nasional.
    `,
    "Bisnis": `
      Nilai tukar rupiah terhadap dollar Amerika Serikat menunjukkan penguatan signifikan dalam beberapa pekan terakhir. Penguatan ini didorong oleh stabilitas ekonomi nasional, kenaikan ekspor, dan masuknya investasi asing. Bank Indonesia terus memantau pergerakan nilai tukar dan siap melakukan intervensi jika diperlukan untuk menjaga stabilitas pasar.
      
      Para pelaku usaha menyambut baik penguatan rupiah karena dapat menekan biaya impor bahan baku. Namun, mereka juga tetap waspada terhadap fluktuasi global yang bisa mempengaruhi perekonomian nasional. Pemerintah diharapkan terus menjaga iklim investasi dan memberikan stimulus bagi sektor-sektor strategis agar pertumbuhan ekonomi tetap terjaga.
    `,
    "Politik": `
      KPU mengumumkan hasil perhitungan suara sementara untuk Pemilu 2025. Proses pemilu kali ini berjalan lancar dengan tingkat partisipasi masyarakat yang tinggi. Berbagai pihak mengapresiasi transparansi dan profesionalisme penyelenggara pemilu. Meski demikian, masih ada beberapa catatan terkait distribusi logistik dan pelaporan hasil di daerah terpencil.
      
      Para kandidat yang lolos ke tahap selanjutnya diharapkan dapat menjaga suasana kondusif dan mengedepankan politik santun. Pengamat politik menilai, pemilu kali ini menjadi tonggak penting dalam memperkuat demokrasi di Indonesia. Pemerintah dan aparat keamanan juga terus mengawal proses rekapitulasi suara agar berjalan aman dan damai.
    `
  };

  // Komentar
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Ambil user login
    const userData = localStorage.getItem("currentUser");
    if (userData) setUser(JSON.parse(userData));
    // Ambil komentar dari localStorage
    const saved = localStorage.getItem(`comments_${news.title}`);
    if (saved) setComments(JSON.parse(saved));
  }, [news.title]);

  useEffect(() => {
    localStorage.setItem(`comments_${news.title}` , JSON.stringify(comments));
  }, [comments, news.title]);

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !commentText.trim()) return;
    setComments(prev => [
      ...prev,
      {
        user: { name: user.fullName, photo: user.photo },
        text: commentText,
        date: new Date().toISOString(),
      },
    ]);
    setCommentText("");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8">
          <img src={news.image} alt={news.title} className="w-full h-64 object-cover rounded-lg mb-6" />
          <span className={`text-sm font-medium ${news.categoryColor}`}>{news.category}</span>
          <h1 className="text-3xl font-bold text-gray-800 mt-2 mb-4">{news.title}</h1>
          <p className="text-gray-600 mb-6">{news.excerpt}</p>
          <div className="text-gray-700 mb-8 whitespace-pre-line">
            {detailContent[news.category] || "Detail berita belum tersedia."}
          </div>
          {/* Komentar */}
          <div className="mt-8">
            <h3 className="font-semibold mb-2 text-lg">Komentar</h3>
            {comments.length === 0 && <div className="text-gray-400 text-sm mb-2">Belum ada komentar.</div>}
            {comments.map((c, i) => (
              <div key={i} className="flex items-start gap-2 mb-2">
                {c.user.photo ? (
                  <img src={c.user.photo} alt={c.user.name} className="w-7 h-7 rounded-full object-cover" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">{c.user.name[0]}</div>
                )}
                <div>
                  <div className="text-xs font-semibold">{c.user.name}</div>
                  <div className="text-xs text-gray-700">{c.text}</div>
                  <div className="text-[10px] text-gray-400">{new Date(c.date).toLocaleString()}</div>
                </div>
              </div>
            ))}
            {user ? (
              <form className="mt-2 flex gap-2" onSubmit={handleAddComment}>
                <input
                  type="text"
                  className="flex-1 border rounded px-2 py-1 text-sm"
                  placeholder="Tulis komentar..."
                  value={commentText}
                  onChange={e => setCommentText(e.target.value)}
                  maxLength={200}
                  required
                />
                <button type="submit" className="bg-red-600 text-white px-3 py-1 rounded text-sm">Kirim</button>
              </form>
            ) : (
              <div className="mt-2 text-sm text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login untuk berkomentar</div>
            )}
          </div>
          <button onClick={() => navigate(-1)} className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors mt-8">Kembali</button>
        </div>
      </div>
    </Layout>
  );
};

export default DetailNews;
