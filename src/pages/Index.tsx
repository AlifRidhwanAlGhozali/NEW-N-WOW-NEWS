import React, { useState } from "react";
import Layout from "../components/Layout";
import NewsCard from "../components/NewsCard";
import FeaturedNews from "../components/FeaturedNews";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");

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
                {showFeatured && <FeaturedNews {...showFeatured} />}
                {/* Article Content */}
                <div className="bg-white rounded-lg shadow-lg mt-6 p-6">
                  <p className="text-gray-700 mb-4">
                    Body text for your whole article or post. We'll put in some lorem ipsum to show how a filled-out page might look:
                  </p>
                  <p className="text-gray-700 mb-4">
                    Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki excepteur Basset hound. Zürich sleepy perfect consectetur.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
                    Exquisite sophisticated iconic cutting-edge laborum deserunt Addis Ababa esse bureaux cupidatat id minim. Sharp classic the best commodo nostrud delightful. Conversation aute Rochester id. Qui sunt remarkable deserunt intricate airport handsome K-pop excepteur classic esse Asia-Pacific laboris.
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
