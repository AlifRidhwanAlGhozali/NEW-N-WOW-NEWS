import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";
import FeaturedNewsGrid from "../components/FeaturedNewsGrid";
import NewsPagination from "../components/NewsPagination";
import { useLocation, useNavigate } from "react-router-dom";

const ITEMS_PER_PAGE = 4;
const MAX_PAGES = 10;

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
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
    // Ambil search dari query string jika ada
    const search = params.get("search");
    setSearchTerm(search || "");
  }, [location.search]);

  useEffect(() => {
    setCurrentPage(1); // Reset ke halaman 1 jika kategori berubah
  }, [selectedCategory]);

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
    },
    // --- Breaking News ---
    {
      category: "Breaking News",
      title: "Gempa Besar Guncang Wilayah Barat Indonesia",
      excerpt: "Gempa berkekuatan 7.2 SR mengguncang wilayah barat Indonesia, masyarakat diimbau tetap waspada...",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop",
      categoryColor: "text-red-700"
    },
    {
      category: "Trending",
      title: "Video Viral: Aksi Heroik di Tengah Banjir",
      excerpt: "Sebuah video aksi penyelamatan viral di media sosial, menuai pujian netizen...",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      categoryColor: "text-pink-600"
    },
    {
      category: "Update",
      title: "Update Harga BBM Hari Ini",
      excerpt: "Pemerintah mengumumkan update harga BBM terbaru yang berlaku mulai hari ini...",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=300&fit=crop",
      categoryColor: "text-blue-600"
    },
    {
      category: "Fakta",
      title: "Fakta Unik: Indonesia Negara dengan Ribuan Pulau",
      excerpt: "Tahukah kamu? Indonesia memiliki lebih dari 17.000 pulau yang tersebar dari Sabang sampai Merauke...",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=300&fit=crop",
      categoryColor: "text-yellow-600"
    },
    {
      category: "Edukasi",
      title: "Tips Belajar Efektif di Era Digital",
      excerpt: "Simak tips belajar efektif dan produktif di era digital untuk pelajar dan mahasiswa...",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      categoryColor: "text-green-600"
    },
    {
      category: "Inspirasi",
      title: "Kisah Inspiratif: Anak Desa Raih Beasiswa Luar Negeri",
      excerpt: "Perjuangan seorang anak desa yang berhasil meraih beasiswa ke universitas ternama dunia...",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop",
      categoryColor: "text-purple-600"
    },
    // --- Tag lain ---
    {
      category: "Viral",
      title: "Fenomena Challenge Baru di Media Sosial",
      excerpt: "Challenge baru di TikTok dan Instagram ramai diikuti anak muda...",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=300&fit=crop",
      categoryColor: "text-pink-700"
    },
    {
      category: "Ekonomi",
      title: "Ekonomi Indonesia Tumbuh di Kuartal Kedua",
      excerpt: "Pertumbuhan ekonomi Indonesia menunjukkan tren positif di kuartal kedua tahun ini...",
      image: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=400&h=300&fit=crop",
      categoryColor: "text-orange-700"
    },
    {
      category: "Nasional",
      title: "Hari Besar Nasional Diperingati Meriah",
      excerpt: "Berbagai daerah di Indonesia memperingati hari besar nasional dengan beragam acara...",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=400&h=300&fit=crop",
      categoryColor: "text-blue-700"
    },
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

  // Filter by search term
  const filteredNews = (selectedCategory === "Semua"
    ? allNews
    : allNews.filter((news) => news.category === selectedCategory)
  ).filter((news) =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  let totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  if (totalPages > MAX_PAGES) totalPages = MAX_PAGES;
  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Rekomendasi berita untuk sidebar kanan (ambil 8 teratas dari filteredNews)
  const recommendedNews = filteredNews.slice(0, 8);

  // Quotes inspiratif harian
  const dailyQuotes = [
    "Berita adalah jendela dunia. Jadilah yang pertama tahu!",
    "Membaca berita, menambah wawasan.",
    "Setiap hari ada cerita baru untukmu.",
    "Jangan lewatkan update penting hari ini!",
    "Informasi adalah kekuatan."
  ];
  const randomQuote = dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)];

  // Tentukan featuredNews yang sesuai kategori
  let showFeatured: any = null;
  if (selectedCategory === "Semua" || selectedCategory === "Politik") {
    showFeatured = featuredNews;
  } else {
    // Ambil berita pertama dari kategori yang dipilih
    const first = newsData.find((n) => n.category === selectedCategory);
    if (first) showFeatured = first;
  }

  // Handler untuk klik hashtag trending/tag highlight
  const handleTagClick = (tag: string) => {
    // Hilangkan tanda # jika ada
    const cleanTag = tag.replace('#', '').toLowerCase();
    setSearchTerm(cleanTag);
    // Update query string agar sinkron dengan fitur search
    const params = new URLSearchParams(location.search);
    params.set('search', cleanTag);
    navigate({ pathname: location.pathname, search: params.toString() });
  };

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
                <FeaturedNewsGrid newsList={paginatedNews.slice(0, 4)} />
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
                  <p className="text-black mb-6 italic">
                    "Membaca berita adalah jendela dunia. Jadilah yang pertama tahu, dan dapatkan wawasan terbaik hanya di NOW WOW News!"
                  </p>
                  <NewsPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrevious={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    onNext={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  />
                  {/* Fitur tambahan di margin bawah */}
                  <div className="mt-10">
                    <div className="bg-gradient-to-r from-red-500 via-yellow-400 to-pink-500 rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center justify-between gap-6 animate-fade-in">
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-white mb-2">Berita Pilihan Hari Ini</div>
                        <div className="text-white mb-2">Jangan lewatkan breaking news dan berita trending yang selalu update setiap hari. Dapatkan insight dan fakta menarik hanya di NOW WOW News!</div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["#breakingnews", "#trending", "#update", "#fakta", "#edukasi", "#inspirasi"].map(tag => (
                            <span
                              key={tag}
                              className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-xs font-semibold border border-white cursor-pointer hover:bg-opacity-40 transition-colors"
                              onClick={() => handleTagClick(tag)}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col items-center">
                        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=120&h=120&fit=crop" alt="Highlight" className="rounded-full border-4 border-white shadow-lg mb-2 w-24 h-24 object-cover" />
                        <span className="text-white text-sm font-semibold">Highlight Hari Ini</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar - Right Column */}
              <div className="space-y-6">
                <div className="font-bold text-lg mb-2">Rekomendasi Berita</div>
                {recommendedNews.map((news, index) => (
                  <NewsCard key={index} {...news} />
                ))}
                <div className="bg-gradient-to-r from-red-500 to-yellow-400 text-white rounded-lg p-4 shadow-lg mt-8 animate-pulse">
                  <div className="font-semibold text-base mb-2">Quotes Hari Ini</div>
                  <div className="italic">{randomQuote}</div>
                </div>
                {/* Fitur: Trending Tag */}
                <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center mt-8">
                  <div className="font-bold text-blue-700 text-lg mb-2">Trending Tag</div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["#politik", "#olahraga", "#teknologi", "#bisnis", "#viral", "#inspirasi", "#ekonomi", "#nasional"].map(tag => (
                      <span
                        key={tag}
                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-blue-200 transition-colors"
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Fitur: Fakta Unik */}
                <div className="bg-yellow-100 rounded-lg shadow p-4 flex flex-col items-center mt-8">
                  <div className="font-bold text-yellow-700 text-lg mb-2">Fakta Unik Hari Ini</div>
                  <div className="text-gray-700 text-center text-sm">
                    {{
                      0: "Tahukah kamu? Indonesia adalah negara kepulauan terbesar di dunia!",
                      1: "Fakta: Berita online kini menjadi sumber utama informasi masyarakat.",
                      2: "Teknologi AI sudah digunakan di berbagai media berita dunia.",
                      3: "Olahraga dapat meningkatkan konsentrasi dan produktivitas.",
                      4: "UMKM Indonesia berkontribusi besar pada ekonomi nasional."
                    }[Math.floor(Math.random() * 5)]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
