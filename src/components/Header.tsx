import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@radix-ui/themes';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-black hover:text-gray-700 transition-colors">
            RideCore
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-black transition-colors">Главная</Link>
            <Link to="/products" className="text-gray-700 hover:text-black transition-colors">Продукты</Link>
            <Link to="/about" className="text-gray-700 hover:text-black transition-colors">О нас</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black transition-colors">Контакты</Link>
          </nav>
          <Button
            variant="ghost"
            size="3"
            className="md:hidden text-gray-700 hover:text-black"
            onClick={toggleMenu}
            aria-label="Переключить меню"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-black transition-colors" onClick={toggleMenu}>Главная</Link>
              <Link to="/products" className="text-gray-700 hover:text-black transition-colors" onClick={toggleMenu}>Продукты</Link>
              <Link to="/about" className="text-gray-700 hover:text-black transition-colors" onClick={toggleMenu}>О нас</Link>
              <Link to="/contact" className="text-gray-700 hover:text-black transition-colors" onClick={toggleMenu}>Контакты</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;