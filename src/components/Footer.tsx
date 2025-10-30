import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-black mb-4">RideCore</h3>
            <p className="text-gray-600">Качественные велосипеды и компоненты для каждого велосипедиста.</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-black transition-colors">Главная</Link></li>
              <li><Link to="/products" className="text-gray-600 hover:text-black transition-colors">Продукты</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-black transition-colors">О нас</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-black transition-colors">Контакты</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Юридическая информация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Условия обслуживания</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-black mb-4">Следите за нами</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-black transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-gray-600">&copy; 2025 RideCore. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;