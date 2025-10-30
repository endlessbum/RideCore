import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">Условия обслуживания</h1>
          <p className="text-gray-600 mb-">
            Используя RideCore, вы соглашаетесь с этими условиями. Пожалуйста, прочитайте их внимательно.
          </p>
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Использование сервиса</h2>
          <p className="text-gray-600 mb-4">Вы можете использовать наш сайт для личных, некоммерческих целей.</p>
          <h2 className="text-2xl font-semibold text-black mt-8 mb-4">Ограничение ответственности</h2>
          <p className="text-gray-600">RideCore не несет ответственности за любые убытки, возникающие из вашего использования наших продуктов.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;