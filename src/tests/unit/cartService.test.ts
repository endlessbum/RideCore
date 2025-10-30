import { describe, it, expect } from 'vitest';
import { persistCart, retrieveCart } from '../../services/cartService';

describe('cartService', () => {
  it('persists and retrieves cart via localStorage through API', () => {
    const cart = { items: [], total: 0 };
    // clear localStorage key used by api/cart ("cart")
    localStorage.removeItem('cart');
    persistCart(cart as any);
    const loaded = retrieveCart();
    expect(loaded).toHaveProperty('items');
    expect(loaded).toHaveProperty('total');
  });
});
