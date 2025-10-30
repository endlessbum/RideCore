import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { vi } from 'vitest';
import { renderWithProviders } from '../test-utils';
import AuthForm from '../../components/AuthForm';

test('renders login form fields', async () => {
  const onSubmit = vi.fn();
  renderWithProviders(<AuthForm onSubmit={onSubmit} isLogin={true} />);

  const email = screen.getByPlaceholderText('Электронная почта');
  const pass = screen.getByPlaceholderText('Пароль');
  const button = screen.getByRole('button');

  expect(email).toBeInTheDocument();
  expect(pass).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('renders registration form with name field when isLogin=false', () => {
  const onSubmit = vi.fn();
  renderWithProviders(<AuthForm onSubmit={onSubmit} isLogin={false} />);
  expect(screen.getByPlaceholderText('Имя')).toBeInTheDocument();
});
