// Read defaults from Vite env variables when provided (Vite exposes vars prefixed with VITE_)
const envLocale = typeof import.meta !== 'undefined' ? (import.meta.env.VITE_APP_LOCALE as string | undefined) : undefined;
const envCurrency = typeof import.meta !== 'undefined' ? (import.meta.env.VITE_APP_CURRENCY as string | undefined) : undefined;

export const DEFAULT_LOCALE = envLocale ?? 'en-US';
export const DEFAULT_CURRENCY = envCurrency ?? 'USD';
export const CART_KEY = 'cart';
