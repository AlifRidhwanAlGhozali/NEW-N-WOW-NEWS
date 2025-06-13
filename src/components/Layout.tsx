import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  onCategoryChange?: (category: string) => void;
  selectedCategory?: string;
}

const Layout = ({ children, onCategoryChange, selectedCategory }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header onCategoryChange={onCategoryChange} selectedCategory={selectedCategory} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
