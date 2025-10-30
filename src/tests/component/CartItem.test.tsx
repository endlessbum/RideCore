import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import CartItem from '../../components/CartItem';

const product = { id: '1', name: 'Bike', price: 100, description: '', image: 'img', category: 'Bikes' } as any;

test('renders cart item and handles quantity and remove', async () => {
  const mockRemove = vi.fn();
  const mockUpdate = vi.fn();
  render(
    <CartItem item={{ product, quantity: 2 }} onRemove={mockRemove} onUpdateQuantity={mockUpdate} />
  );

  expect(screen.getByRole('heading', { name: 'Bike' })).toBeInTheDocument();
  expect(screen.getByTestId('cart-quantity-1')).toBeInTheDocument();

  const user = userEvent.setup();
  await user.click(screen.getByRole('button', { name: '-' }));
  expect(mockUpdate).toHaveBeenCalledWith('1', 1);

  await user.click(screen.getByRole('button', { name: '+' }));
  expect(mockUpdate).toHaveBeenCalledWith('1', 3);

  await user.click(screen.getByRole('button', { name: 'Удалить' }));
  expect(mockRemove).toHaveBeenCalledWith('1');
});
