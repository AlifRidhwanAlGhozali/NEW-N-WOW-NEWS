import { Card, CardContent } from "./ui/card";
import { useNavigate } from "react-router-dom";

interface NewsCardProps {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  categoryColor: string;
}

const NewsCard = ({ category, title, excerpt, image, categoryColor }: NewsCardProps) => {
  const navigate = useNavigate();
  const news = { category, title, excerpt, image, categoryColor };

  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
      <CardContent className="p-0">
        <div className="flex gap-4 p-4" onClick={() => navigate("/detail", { state: { news } })}>
          <img 
            src={image} 
            alt={title}
            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
          />
          <div className="flex-1">
            <span className={`text-sm font-medium ${categoryColor}`}>{category}</span>
            <h3 className="font-semibold text-gray-800 mt-1 mb-2 line-clamp-2">{title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{excerpt}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
