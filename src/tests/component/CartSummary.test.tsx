import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import Cart from '../../pages/Cart';

test('renders cart summary', () => {
  renderWithProviders(<Cart />);
  expect(screen.getByRole('heading', { name: 'Ваша корзина' })).toBeInTheDocument();
});