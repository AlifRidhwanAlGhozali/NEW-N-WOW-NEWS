import { ChevronLeft, ChevronRight } from "lucide-react";

interface NewsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPrevious: () => void;
  onNext: () => void;
}

const NewsPagination = ({ currentPage, totalPages, onPrevious, onNext }: NewsPaginationProps) => {
  return (
    <div className="flex items-center justify-between mt-8">
      <button
        className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-white transition-colors disabled:opacity-50 border border-red-600 bg-white rounded"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
        Previous Page
      </button>
      <span className="text-red-600 font-semibold">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className="flex items-center gap-2 px-4 py-2 text-red-600 hover:text-white transition-colors disabled:opacity-50 border border-red-600 bg-white rounded"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Next Page
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default NewsPagination;
