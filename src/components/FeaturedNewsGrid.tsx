import { useNavigate } from "react-router-dom";

interface FeaturedNewsGridProps {
  newsList: Array<{
    category: string;
    title: string;
    excerpt: string;
    image: string;
    categoryColor: string;
  }>;
}

const FeaturedNewsGrid = ({ newsList }: FeaturedNewsGridProps) => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {newsList.map((news, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
          onClick={() => navigate("/detail", { state: { news } })}
        >
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <span className={`text-sm font-medium ${news.categoryColor}`}>{news.category}</span>
            <h2 className="text-2xl font-bold text-gray-800 mt-2 mb-3 line-clamp-2">{news.title}</h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              Baca Selengkapnya
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedNewsGrid;
