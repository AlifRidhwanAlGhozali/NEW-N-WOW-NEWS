import { useNavigate } from "react-router-dom";

interface FeaturedNewsProps {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  categoryColor: string;
}

const FeaturedNews = ({ category, title, excerpt, image, categoryColor }: FeaturedNewsProps) => {
  const navigate = useNavigate();
  const news = { category, title, excerpt, image, categoryColor };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={image} 
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <span className={`text-sm font-medium ${categoryColor}`}>{category}</span>
        <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-3">{title}</h2>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button
          className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
          onClick={() => navigate("/detail", { state: { news } })}
        >
          Baca Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default FeaturedNews;
