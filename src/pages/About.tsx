import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-black mb-8">О RideCore</h1>
          <p className="text-xl text-gray-600 mb-8">
            RideCore стремится предоставлять высококачественные велосипеды и компоненты для велосипедистов всех уровней. 
            Наша минималистичная философия дизайна гарантирует, что каждый продукт сочетает производительность, стиль и долговечность. 
            Вдохновленные инновациями, мы направляемся в будущее велоспорта.
          </p>
          <p className="text-lg text-gray-700">
            Основанная с страстью к открытому пути, RideCore предлагает тщательно подобранный выбор премиальных велосипедов, рам, тормозов и аксессуаров. 
            Наслаждайтесь элегантностью дизайна в каждой поездке.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;