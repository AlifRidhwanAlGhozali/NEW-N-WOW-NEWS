import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  // Quotes inspiratif untuk footer
  const footerQuotes = [
    "Terima kasih telah membaca di NOW WOW News!",
    "Update terus wawasanmu, dunia ada di genggaman.",
    "Bersama kita cerdas, bersama kita tahu.",
    "Jangan lupa bagikan berita positif hari ini!",
    "NOW WOW News, sumber inspirasi harianmu."
  ];
  const randomFooterQuote = footerQuotes[Math.floor(Math.random() * footerQuotes.length)];

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-gray-800">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <button
              className="text-2xl font-bold text-red-600 focus:outline-none drop-shadow-lg hover:scale-105 transition-transform"
              style={{ background: "none", border: "none", padding: 0, lineHeight: 1 }}
              onClick={() => navigate("/")}
              aria-label="Beranda NOW WOW"
              type="button"
            >
              NOW<br />WOW
            </button>
            <p className="text-gray-200 font-semibold italic animate-pulse">{randomFooterQuote}</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/alif-ridhwan-al-ghozali/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@alifridhwanalghozali424" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/arilalghozali/?hl=id" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Baris copyright dan info tambahan */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 opacity-80">
          <div>
            &copy; {new Date().getFullYear()} NOW WOW News. All rights reserved.
          </div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <button onClick={() => navigate('/kebijakan-privasi')} className="hover:underline bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">Kebijakan Privasi</button>
            <button onClick={() => navigate('/syarat-ketentuan')} className="hover:underline bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">Syarat & Ketentuan</button>
            <button onClick={() => navigate('/kontak')} className="hover:underline bg-transparent border-none p-0 m-0 text-inherit cursor-pointer">Kontak</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
