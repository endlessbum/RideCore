import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { renderWithProviders } from '../test-utils';
import ProductCard from '../../components/ProductCard';

test('renders product card and handles add to cart', async () => {
  const mockOnAdd = vi.fn();
  renderWithProviders(
    <ProductCard id="1" name="Test Bike" price={100} description="Desc" image="img" category="Bikes" onAddToCart={mockOnAdd} />
  );
  expect(screen.getByRole('heading', { name: 'Test Bike' })).toBeInTheDocument();
  const user = userEvent.setup();
  await user.click(screen.getByRole('button', { name: /Добавить в корзину/i }));
  expect(mockOnAdd).toHaveBeenCalled();
});