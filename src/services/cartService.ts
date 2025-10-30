// Service for cart operations (could use Supabase for persistence)
import { saveCart, loadCart } from '../api/cart';

export const persistCart = (cart: any) => {
  saveCart(cart);
};

export const retrieveCart = () => {
  return loadCart();
};