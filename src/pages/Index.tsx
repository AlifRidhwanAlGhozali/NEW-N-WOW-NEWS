import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";
import FeaturedNewsGrid from "../components/FeaturedNewsGrid";
import { useLocation, useNavigate } from "react-router-dom";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const location = useLocation();
  const navigate = useNavigate();

  // Sync kategori dari query string jika ada
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const kategori = params.get("kategori");
    if (kategori) {
      const cap = kategori.charAt(0).toUpperCase() + kategori.slice(1).toLowerCase();
      setSelectedCategory(cap);
    } else {
      setSelectedCategory("Semua");
    }
  }, [location.search]);

  const newsData = [
    {
      category: "Teknologi",
      title: "Inovasi AI Terbaru di Indonesia",
      excerpt: "Perkembangan teknologi AI di Indonesia semakin pesat...",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      categoryColor: "text-red-600"
    },
    {
      category: "Olahraga", 
      title: "Tim Nasional Lolos ke Final",
      excerpt: "Indonesia berhasil mengalahkan Malaysia dengan skor...",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      categoryColor: "text-red-600"
    },
    {
      category: "Bisnis",
      title: "Rupiah Menguat Terhadap Dollar", 
      excerpt: "Nilai tukar rupiah menunjukkan penguatan signifikan...",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      categoryColor: "text-red-600"
    },
    // Berita tambahan agar lebih banyak rekomendasi
    {
      category: "Teknologi",
      title: "Startup Lokal Raih Pendanaan Besar",
      excerpt: "Startup Indonesia mendapatkan investasi dari luar negeri...",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      categoryColor: "text-blue-600"
    },
    {
      category: "Olahraga",
      title: "Atlet Muda Pecahkan Rekor Nasional",
      excerpt: "Prestasi membanggakan dari atlet muda Indonesia...",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      categoryColor: "text-green-600"
    },
    {
      category: "Bisnis",
      title: "Ekspor UMKM Tembus Pasar Eropa",
      excerpt: "UMKM Indonesia berhasil menembus pasar ekspor Eropa...",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop",
      categoryColor: "text-yellow-600"
    },
    {
      category: "Politik",
      title: "Debat Capres Berlangsung Sengit",
      excerpt: "Debat calon presiden berlangsung dengan berbagai argumen menarik...",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=400&h=300&fit=crop",
      categoryColor: "text-purple-600"
    },
    {
      category: "Teknologi",
      title: "Pemerintah Dorong Digitalisasi Desa",
      excerpt: "Program digitalisasi desa mulai diterapkan di berbagai daerah...",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
      categoryColor: "text-indigo-600"
    },
    {
      category: "Olahraga",
      title: "Indonesia Tuan Rumah Kejuaraan Asia",
      excerpt: "Kejuaraan olahraga Asia akan digelar di Indonesia tahun ini...",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop",
      categoryColor: "text-pink-600"
    },
    {
      category: "Bisnis",
      title: "Pasar Saham Menguat di Awal Pekan",
      excerpt: "Indeks saham Indonesia dibuka menguat pada perdagangan awal pekan...",
      image: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=400&h=300&fit=crop",
      categoryColor: "text-orange-600"
    }
  ];

  const featuredNews = {
    category: "Politik",
    title: "Perkembangan Terbaru Pemilu 2025",
    excerpt: "KPU mengumumkan hasil perhitungan suara sementara untuk Pemilu 2025...",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop",
    categoryColor: "text-red-600"
  };

  const categories = ["Semua", "Politik", "Olahraga", "Teknologi", "Bisnis"];

  // Gabungkan featuredNews ke dalam newsData jika kategori 'Politik' dipilih atau 'Semua'
  let allNews = [...newsData];
  if (selectedCategory === "Politik" || selectedCategory === "Semua") {
    allNews = [
      { ...featuredNews },
      ...newsData
    ];
  }

  const filteredNews =
    selectedCategory === "Semua"
      ? allNews
      : allNews.filter((news) => news.category === selectedCategory);

  // Tentukan featuredNews yang sesuai kategori
  let showFeatured: any = null;
  if (selectedCategory === "Semua" || selectedCategory === "Politik") {
    showFeatured = featuredNews;
  } else {
    // Ambil berita pertama dari kategori yang dipilih
    const first = newsData.find((n) => n.category === selectedCategory);
    if (first) showFeatured = first;
  }

  return (
    <Layout onCategoryChange={setSelectedCategory} selectedCategory={selectedCategory}>
      <div className="min-h-screen bg-gray-50">
        {/* Main Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Featured News - Left Column */}
              <div className="lg:col-span-2">
                {/* Rekomendasi berita besar (grid) */}
                <FeaturedNewsGrid newsList={filteredNews.slice(0, 4)} />
                {/* Article Content */}
                <div className="bg-white rounded-lg shadow-lg mt-6 p-6">
                  <p className="text-gray-700 mb-4 text-lg font-semibold">
                    Temukan berita pilihan dan rekomendasi menarik setiap hari!
                  </p>
                  <p className="text-gray-700 mb-4">
                    Portal ini menyajikan berita-berita terpopuler, update terkini, dan insight mendalam dari berbagai kategori. Klik <span className="text-red-600 font-semibold">Baca Selengkapnya</span> pada setiap berita untuk mendapatkan informasi lengkap, analisis, dan fakta menarik yang tidak Anda temukan di tempat lain.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Jangan lewatkan berita eksklusif, kisah inspiratif, dan liputan khusus yang kami hadirkan untuk Anda. Setiap hari, selalu ada berita baru yang layak untuk Anda baca!
                  </p>
                  <p className="text-gray-700 mb-4">
                    <span className="font-semibold text-blue-700">Tips:</span> Gunakan filter kategori di atas untuk menyesuaikan rekomendasi berita sesuai minat Anda.
                  </p>
                  <p className="text-gray-700 mb-6 italic">
                    "Membaca berita adalah jendela dunia. Jadilah yang pertama tahu, dan dapatkan wawasan terbaik hanya di NOW WOW News!"
                  </p>
                </div>
              </div>
              {/* Sidebar - Right Column */}
              <div className="space-y-6">
                {filteredNews.map((news, index) => (
                  <NewsCard key={index} {...news} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
