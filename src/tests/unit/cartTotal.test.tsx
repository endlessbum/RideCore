import { describe, it, expect } from 'vitest';
import cartReducer, { addItem, removeItem, updateQuantity, clearCart } from '../../store/cartSlice';

describe('cart total calculations', () => {
  it('calculates total when adding items', () => {
    const product = { id: '1', name: 'Bike', price: 100, description: 'Desc', image: 'img', category: 'Bikes' } as any;
    const state1 = cartReducer(undefined as any, addItem(product));
    expect(state1.items).toHaveLength(1);
    expect(state1.total).toBe(100);

    const state2 = cartReducer(state1 as any, addItem(product));
    expect(state2.items[0].quantity).toBe(2);
    expect(state2.total).toBe(200);
  });

  it('updates total on quantity change and removal', () => {
    const product1 = { id: 'a', name: 'A', price: 10, description: '', image: '', category: '' } as any;
    const product2 = { id: 'b', name: 'B', price: 20, description: '', image: '', category: '' } as any;
    let state = cartReducer(undefined as any, addItem(product1));
    state = cartReducer(state as any, addItem(product2));
    expect(state.total).toBe(30);

    state = cartReducer(state as any, updateQuantity({ id: 'a', quantity: 3 }));
    expect(state.total).toBe(3 * 10 + 20);

    state = cartReducer(state as any, removeItem('b'));
    expect(state.total).toBe(30);

    state = cartReducer(state as any, clearCart());
    expect(state.total).toBe(0);
    expect(state.items).toHaveLength(0);
  });
});
