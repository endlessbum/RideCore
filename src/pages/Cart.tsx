import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '@radix-ui/themes';
import type { RootState } from '../store/store';
import { removeItem, updateQuantity } from '../store/cartSlice';
import { selectCartTotal } from '../store/selectors';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import { formatPrice } from '../utils/formatPrice';

const Cart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const total = useSelector(selectCartTotal);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">Ваша корзина</h1>
          {cart.items.length === 0 ? (
            <p className="text-gray-600">Ваша корзина пуста. <Link to="/products" className="text-black underline">Покупайте сейчас</Link>.</p>
          ) : (
            <>
              {cart.items.map(item => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onRemove={(id) => dispatch(removeItem(id))}
                  onUpdateQuantity={(id, qty) => dispatch(updateQuantity({id, quantity: qty}))}
                />
              ))}
              <div className="mt-8 text-right">
                <p className="text-xl font-bold text-black">Итого: {formatPrice(total)}</p>
                <Button size="4" asChild className="mt-4">
                  <Link to="/checkout">Оформить заказ</Link>
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;