import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getProductById } from '../api/products';
import { formatPrice } from '../utils/formatPrice';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-8">Продукт не найден</h1>
          <Button asChild>
            <Link to="/products">Вернуться к продуктам</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <img
            src={`/${product.image}`}  // ← Исправлено: добавлена закрывающая }
            alt={product.name}
            className="w-full h-96 object-cover rounded"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = '/no-image.png';
              e.currentTarget.alt = 'Изображение недоступно';
            }}
          />
          <div>
            <h1 className="text-4xl font-bold text-black mb-4">{product.name}</h1>
            <p className="text-xl text-gray-600 mb-4">{formatPrice(product.price)}</p>
            <p className="text-gray-700 mb-8">{product.description}</p>
            <Button size="4" onClick={() => dispatch(addItem(product))}>
              Добавить в корзину
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;