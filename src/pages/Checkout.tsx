import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import { toast } from 'react-toastify';
import type { RootState } from '../store/store';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { formatPrice } from '../utils/formatPrice';

const Checkout: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const total = cart.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const onSubmit = () => {
    // Simulate checkout
    toast.success('Заказ размещен успешно!');
    navigate('/order-success');
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-black mb-8">Оформление заказа</h1>
          <p className="text-gray-600">Ваша корзина пуста.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-black text-center mb-12">Оформление заказа</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
              <input {...register('name')} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Электронная почта</label>
              <input {...register('email')} type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Адрес</label>
              <textarea {...register('address')} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500" required />
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-black">Итого: {formatPrice(total)}</p>
              <Button type="submit" size="4" className="mt-4">Разместить заказ</Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;