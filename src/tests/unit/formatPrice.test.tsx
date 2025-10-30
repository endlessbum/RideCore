import { formatPrice } from '../../utils/formatPrice';

test('formats price correctly', () => {
  expect(formatPrice(1234.56)).toBe('$1,234.56');
});