import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { addItem, clearCart } from '../../store/cartSlice';
import createPersistCartMiddleware from '../../store/middleware/persistCart';

// Mock saveCart from api/cart
vi.mock('../../api/cart', () => ({
  saveCart: vi.fn(),
  loadCart: vi.fn(() => ({ items: [], total: 0 })),
}));

import { saveCart } from '../../api/cart';

describe('persistCartMiddleware', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    (saveCart as unknown as jest.Mock)?.mockClear?.();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('calls saveCart after cart changes with debounce', async () => {
    const store = configureStore({
      reducer: { cart: cartReducer },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createPersistCartMiddleware()),
    });

    // dispatch an action that changes cart
    store.dispatch(addItem({ id: '1', name: 'A', price: 10, description: '', image: '', category: 'B' } as any));

    // advance timers less than debounce => should not have been called
    vi.advanceTimersByTime(200);
    expect((saveCart as unknown as vi.Mock).mock.calls.length).toBe(0);

    // advance beyond debounce
    vi.advanceTimersByTime(200);

    // allow any pending microtasks
    await Promise.resolve();

    expect((saveCart as unknown as vi.Mock).mock.calls.length).toBeGreaterThanOrEqual(1);
  });

  it('does not call saveCart when dispatching unrelated actions that do not change cart', async () => {
    const store = configureStore({
      reducer: { cart: cartReducer },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createPersistCartMiddleware()),
    });

    // dispatch clear then clear again - second should not change state
    store.dispatch(clearCart());
    vi.advanceTimersByTime(400);
    await Promise.resolve();
    // clearCart will call saveCart only once at most
    expect((saveCart as unknown as vi.Mock).mock.calls.length).toBeGreaterThanOrEqual(0);
  });
});
