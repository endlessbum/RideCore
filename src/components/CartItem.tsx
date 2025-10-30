import React from 'react';
import { Button } from '@radix-ui/themes';
import type { CartItem as CartItemType } from '../types/cart';
import { formatPrice } from '../utils/formatPrice';

interface CartItemProps {
  item: CartItemType;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center space-x-4 border-b border-gray-200 py-4">
      <img src={item.product.image} alt={item.product.name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-semibold text-black">{item.product.name}</h3>
        <p className="text-gray-600">{formatPrice(item.product.price)}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="1" onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}>-</Button>
        <span className="px-2" data-testid={`cart-quantity-${item.product.id}`}>{item.quantity}</span>
        <Button variant="outline" size="1" onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}>+</Button>
      </div>
      <Button variant="outline" size="2" onClick={() => onRemove(item.product.id)}>Удалить</Button>
    </div>
  );
};

export default CartItem;