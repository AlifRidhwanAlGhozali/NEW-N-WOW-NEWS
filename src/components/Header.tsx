import { Search, User as UserIcon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React from "react";

interface HeaderProps {
  onCategoryChange?: (category: string) => void;
  selectedCategory?: string;
}

const categories = ["Semua", "Politik", "Olahraga", "Teknologi", "Bisnis"];

const Header: React.FC<HeaderProps> = ({ onCategoryChange, selectedCategory }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = React.useState<any>(null);
  const [searchInput, setSearchInput] = React.useState("");
  const [suggestions, setSuggestions] = React.useState<string[]>([]);
  // Ambil data judul berita untuk autocomplete
  React.useEffect(() => {
    if (!searchInput) {
      setSuggestions([]);
      return;
    }
    // Ambil semua judul berita dari localStorage (atau dari newsData jika ingin statis)
    let newsTitles: string[] = [];
    try {
      const newsData = JSON.parse(localStorage.getItem("newsData") || "[]");
      if (Array.isArray(newsData)) {
        newsTitles = newsData.map((n: any) => n.title);
      }
    } catch {
      // fallback jika tidak ada di localStorage
      newsTitles = [
        "Inovasi AI Terbaru di Indonesia",
        "Tim Nasional Lolos ke Final",
        "Rupiah Menguat Terhadap Dollar",
        "Startup Lokal Raih Pendanaan Besar",
        "Atlet Muda Pecahkan Rekor Nasional",
        "Ekspor UMKM Tembus Pasar Eropa",
        "Debat Capres Berlangsung Sengit",
        "Pemerintah Dorong Digitalisasi Desa",
        "Indonesia Tuan Rumah Kejuaraan Asia",
        "Pasar Saham Menguat di Awal Pekan",
        "Gempa Besar Guncang Wilayah Barat Indonesia",
        "Video Viral: Aksi Heroik di Tengah Banjir",
        "Update Harga BBM Hari Ini",
        "Fakta Unik: Indonesia Negara dengan Ribuan Pulau",
        "Tips Belajar Efektif di Era Digital",
        "Kisah Inspiratif: Anak Desa Raih Beasiswa Luar Negeri"
      ];
    }
    // Filter judul yang mengandung input
    const filtered = newsTitles.filter(title =>
      title.toLowerCase().includes(searchInput.toLowerCase())
    ).slice(0, 5);
    setSuggestions(filtered);
  }, [searchInput]);

  React.useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) setCurrentUser(JSON.parse(user));
    else setCurrentUser(null);
  }, []);

  React.useEffect(() => {
    // Sync search input with query string
    const params = new URLSearchParams(location.search);
    setSearchInput(params.get("search") || "");
  }, [location.search]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    navigate("/login");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(location.search);
    if (searchInput) {
      params.set("search", searchInput);
    } else {
      params.delete("search");
    }
    navigate({ pathname: location.pathname, search: params.toString() });
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <button
            className="text-2xl font-bold text-red-600 focus:outline-none"
            style={{ background: "none", border: "none", padding: 0, lineHeight: 1 }}
            onClick={() => navigate("/")}
            aria-label="Beranda NOW WOW"
            type="button"
          >
            NOW<br />WOW
          </button>

          {/* Search Bar */}
          <form className="flex-1 max-w-md mx-8" onSubmit={handleSearch} autoComplete="off">
            <div className="relative">
              <input
                type="text"
                placeholder="Cari berita..."
                className="w-full px-4 py-2 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                autoComplete="off"
              />
              {/* Autocomplete suggestions */}
              {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 top-full bg-white border border-gray-200 rounded-b-lg shadow z-20 max-h-48 overflow-y-auto">
                  {suggestions.map((s, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                      onMouseDown={() => {
                        setSearchInput(s);
                        const params = new URLSearchParams(location.search);
                        params.set("search", s);
                        navigate({ pathname: location.pathname, search: params.toString() });
                        setSuggestions([]);
                      }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              )}
              <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2">
                <Search className="text-white w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border focus:outline-none ${
                  selectedCategory === cat
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-800 border-gray-300 hover:bg-red-50"
                }`}
                onClick={() => {
                  if (cat === "Semua") navigate("/");
                  else navigate(`/?kategori=${cat.toLowerCase()}`);
                  if (onCategoryChange) onCategoryChange(cat);
                }}
                type="button"
              >
                {cat}
              </button>
            ))}
          </nav>

          {/* User Info or Auth Buttons */}
          <div className="flex items-center space-x-3 ml-6">
            {currentUser ? (
              <>
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={() => navigate("/akun")}
                  style={{ background: "none", border: "none", padding: 0 }}
                  type="button"
                >
                  {currentUser.photo ? (
                    <img
                      src={currentUser.photo}
                      alt={currentUser.fullName}
                      className="w-9 h-9 rounded-full object-cover border-2 border-red-600"
                    />
                  ) : (
                    <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-200 border-2 border-red-600">
                      <UserIcon className="w-6 h-6 text-gray-500" />
                    </span>
                  )}
                  <span className="font-medium text-white mr-2">{currentUser.fullName}</span>
                </button>
                <button
                  onClick={handleLogout}
                  className="px-3 py-2 rounded-full text-sm font-medium bg-red-600 hover:bg-red-700 text-white transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/signup"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    location.pathname === '/signup'
                      ? 'bg-red-600 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  <UserIcon className="inline w-4 h-4 mr-1" />
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    location.pathname === '/login'
                      ? 'bg-red-600 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  }`}
                >
                  <UserIcon className="inline w-4 h-4 mr-1" />
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
