import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test-utils';
import Footer from '../../components/Footer';

test('renders footer with links and copyright', () => {
  renderWithProviders(<Footer />);

  // название компании как заголовок
  expect(screen.getByRole('heading', { name: /RideCore/ })).toBeInTheDocument();
  // копирайт и ссылка "Главная"
  expect(screen.getByText(/Все права защищены/)).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Главная' })).toBeInTheDocument();
});
