import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Search from '../../components/Search';

test('calls onSearch when typing', async () => {
  const onSearch = vi.fn();
  render(<Search onSearch={onSearch} />);
  const input = screen.getByPlaceholderText('Поиск продуктов...');
  const user = userEvent.setup();
  await user.type(input, 'bike');
  expect(onSearch).toHaveBeenCalledWith('bike');
});
