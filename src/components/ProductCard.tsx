import React from 'react';
import { Button } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import type { Product } from '../types/product';
import { formatPrice } from '../utils/formatPrice';

interface ProductCardProps extends Product {
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, price, description, image, onAddToCart }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/products/${id}`}>
        <img src={image} alt={name} className="w-full h-48 object-cover" loading="lazy" />
      </Link>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-black mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-black">{formatPrice(price)}</span>
          <Button variant="outline" size="2" onClick={onAddToCart}>Добавить в корзину</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;