import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../test-utils';
import Header from '../../components/Header';

test('renders header and has toggle button', async () => {
  renderWithProviders(<Header />);

  expect(screen.getByRole('link', { name: 'RideCore' })).toBeInTheDocument();
  const toggleButton = screen.getByLabelText('Переключить меню');
  const user = userEvent.setup();
  await user.click(toggleButton);
  // ensure button exists and click does not throw
  expect(toggleButton).toBeInTheDocument();
});
