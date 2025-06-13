import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-8 pt-8 border-t border-gray-800">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="text-2xl font-bold text-red-600">
              NOW<br />WOW
            </div>
            <p className="text-gray-300">Berita Terbaru, Hanya Sekali Klik.</p>
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
      </div>
    </footer>
  );
};

export default Footer;
