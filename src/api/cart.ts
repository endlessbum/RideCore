import type { Cart } from '../types/cart';

export const saveCart = (cart: Cart): void => {
  try {
    localStorage.setItem('cart', JSON.stringify(cart));
  } catch (error) {
    console.error('Failed to save cart:', error);
    throw new Error('Failed to save cart to localStorage');
  }
};

export const loadCart = (): Cart => {
  try {
    const raw = localStorage.getItem('cart');
    if (!raw) return { items: [], total: 0 };
    const parsed = JSON.parse(raw);
    return {
      items: parsed.items ?? [],
      total: typeof parsed.total === 'number' ? parsed.total : 0
    };
  } catch (error) {
    console.error('Failed to load cart:', error);
    return { items: [], total: 0 };
  }
};