import type { Middleware } from '@reduxjs/toolkit';
import { saveCart } from '../../api/cart';
import { CART_KEY } from '../../config';

// Simple debounce helper
const debounce = (fn: (...args: any[]) => void, wait = 300) => {
  let t: ReturnType<typeof setTimeout> | null = null;
  return (...args: any[]) => {
    if (t) clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
};

const debouncedSave = debounce((cartState: any) => {
  try {
    saveCart(cartState);
  } catch (e) {
    // swallow errors; saving should not break app
    // eslint-disable-next-line no-console
    console.error('Failed to persist cart', e);
  }
}, 300);

export const persistCartMiddleware: Middleware = () => (next) => (action) => {
  const result = next(action);
  try {
    // access store state via arguments isn't possible here, so middleware when created will be applied with store
  } catch (e) {
    // ignore
  }
  return result;
};

// Factory to create middleware with access to store.getState
export const createPersistCartMiddleware = (): Middleware => {
  return (store) => (next) => (action) => {
    const prev = store.getState().cart;
    const result = next(action);
    const nextState = store.getState().cart;
    // minimal shallow compare by reference
    if (prev !== nextState) {
      debouncedSave(nextState);
    }
    return result;
  };
};

export default createPersistCartMiddleware;
