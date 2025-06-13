
import { ChevronLeft, ChevronRight } from "lucide-react";

const NewsPagination = () => {
  return (
    <div className="flex items-center justify-between mt-8">
      <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-gray-300 transition-colors">
        <ChevronLeft className="w-4 h-4" />
        Previous Page
      </button>
      
      <button className="flex items-center gap-2 px-4 py-2 text-white hover:text-gray-300 transition-colors">
        Next Page
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default NewsPagination;
