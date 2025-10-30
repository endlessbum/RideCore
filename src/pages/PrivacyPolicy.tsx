import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">Политика конфиденциальности</h1>
          <p className="text-gray-600 mb-4">
            В RideCore мы стремимся защищать вашу конфиденциальность. Эта политика описывает, как мы собираем, используем и защищаем вашу информацию.
          </p>
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Информация, которую мы собираем</h2>
          <p className="text-gray-600 mb-4">Мы собираем личную информацию, такую как имя, email и платежные данные для обработки заказов.</p>
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Как мы ее используем</h2>
          <p className="text-gray-600">Ваша информация используется для выполнения заказов, улучшения наших услуг и общения с вами.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;