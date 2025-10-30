import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import Search from '../components/Search';
import Filter from '../components/Filter';
import { getProducts } from '../api/products';

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const allProducts = getProducts();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([]);

  const categoryData = useMemo(() => {
    const data: Record<string, string[]> = {};
    allProducts.forEach(product => {
      if (!data[product.category]) {
        data[product.category] = [];
      }
      // only include defined subcategories
      if (product.subcategory && !data[product.category].includes(product.subcategory)) {
        data[product.category].push(product.subcategory);
      }
    });
    return data;
  }, [allProducts]);

  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const prodSub = product.subcategory ?? '';
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = selectedSubcategories.length === 0 || selectedSubcategories.includes(prodSub);
      return matchesSearch && matchesFilter;
    });
  }, [allProducts, searchQuery, selectedSubcategories]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-black text-center mb-12">Наши продукты</h1>
          <div className="mb-8">
            <Search onSearch={setSearchQuery} /> {/* Поиск сверху */}
          </div>
          <div className="flex flex-row gap-4 mb-8"> {/* Фильтры под поиском, в горизонтальном ряду */}
            <Filter categoryData={categoryData} onFilter={setSelectedSubcategories} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} onAddToCart={() => dispatch(addItem(product))} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;