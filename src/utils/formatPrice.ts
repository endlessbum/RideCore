import { DEFAULT_CURRENCY, DEFAULT_LOCALE } from '../config';

export const formatPrice = (
  price: number,
  locale: string = DEFAULT_LOCALE,
  currency: string = DEFAULT_CURRENCY
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(price);
};