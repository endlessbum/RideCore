import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const featuredProducts = [
    {
      id: '5',
      name: 'Велошлем Pro',
      price: 3990,
      description: 'Продвинутый шлем для безопасности с вентиляцией.',
      image: 'Велошлем.png',
      category: 'Аксессуары'
    },
    {
      id: '2',
      name: 'Рама из углеродного волокна',
      price: 17990,
      description: 'Легкая рама из углеродного волокна для скорости и маневренности.',
      image: 'Рама из углеродного волокна.png',
      category: 'Рамы'
    },
    {
      id: '3',
      name: 'Гидравлические тормоза',
      price: 6990,
      description: 'Точные гидравлические тормоза для максимального контроля.',
      image: 'Гидравлические тормоза.png',
      category: 'Тормоза'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className="relative h-screen flex items-center justify-center bg-gray-100">
          <img
            src="Велосипедист в горах.png"
            alt="Геройский велосипед"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Направляйтесь в будущее</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">— откройте для себя качественные велосипеды и компоненты, разработанные для производительности и стиля</p>
            <Button size="4" asChild>
              <Link to="/products">Просмотреть продукты</Link>
            </Button>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-12">Рекомендуемые продукты</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} onAddToCart={() => dispatch(addItem(product))} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="4" variant="outline" asChild>
                <Link to="/products">Посмотреть все продукты</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;