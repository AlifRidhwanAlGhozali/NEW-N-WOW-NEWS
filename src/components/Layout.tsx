import React, { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  onCategoryChange?: (category: string) => void;
  selectedCategory?: string;
}

const Layout = ({ children, onCategoryChange, selectedCategory }: LayoutProps) => {
  const [categoryList, setCategoryList] = useState<string[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/categories")
      .then((res) => res.json())
      .then((data) => {
        const names = data.map((cat: any) => cat.name);
        setCategoryList(["Semua", ...names]);
      })
      .catch((err) => {
        console.error("Gagal mengambil kategori:", err);
        setCategoryList(["Semua"]);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        onCategoryChange={onCategoryChange}
        selectedCategory={selectedCategory}
        categoryList={categoryList}
      />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
