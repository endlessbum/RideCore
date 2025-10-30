import productsData from '../data/products.json';
import type { Product } from '../types/product';

export const getProducts = (): Product[] => productsData;

export const getProductById = (id: string): Product | undefined => productsData.find(p => p.id === id);