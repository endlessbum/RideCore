import { describe, it, expect } from 'vitest';
import { getProducts, getProductById } from '../../api/products';

describe('products api', () => {
  it('returns products array', () => {
    const products = getProducts();
    expect(Array.isArray(products)).toBe(true);
    expect(products.length).toBeGreaterThan(0);
  });

  it('finds product by id', () => {
    const products = getProducts();
    const p = products[0];
    const found = getProductById(p.id);
    expect(found).toBeDefined();
    expect(found?.id).toBe(p.id);
  });
});
