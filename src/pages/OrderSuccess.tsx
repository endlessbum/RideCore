import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderSuccess: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-black mb-8">Заказ успешно оформлен!</h1>
        <p className="text-xl text-gray-600 mb-8">Спасибо за покупку. Ваш заказ размещен успешно.</p>
        <Button size="4" asChild>
          <Link to="/">Продолжить покупки</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default OrderSuccess;