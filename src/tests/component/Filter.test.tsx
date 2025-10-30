import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Filter from '../../components/Filter';

test('renders categories and toggles subcategories selection', async () => {
  const categoryData = { Bikes: ['Road', 'Mountain'], Accessories: ['Helmets'] };
  const onFilter = vi.fn();

  render(<Filter categoryData={categoryData} onFilter={onFilter} />);

  // заголовок фильтров
  expect(screen.getByRole('heading', { name: 'Фильтры' })).toBeInTheDocument();
  // категория как кнопка
  expect(screen.getByRole('button', { name: 'Bikes' })).toBeInTheDocument();

  const user = userEvent.setup();

  // expand Bikes
  await user.click(screen.getByRole('button', { name: 'Bikes' }));
  expect(screen.getByRole('checkbox', { name: 'Road' })).toBeInTheDocument();

  // check a subcategory
  await user.click(screen.getByRole('checkbox', { name: 'Road' }));
  expect(onFilter).toHaveBeenCalledTimes(1);
  expect(onFilter).toHaveBeenCalledWith(['Road']);
});
