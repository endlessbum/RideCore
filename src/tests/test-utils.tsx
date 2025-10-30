import React from 'react';
import type { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../store/store';

export const renderWithProviders = (ui: React.ReactElement) => {
  const Wrapper: React.FC<PropsWithChildren> = ({ children }) => (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
  return render(ui, { wrapper: Wrapper });
};

export * from '@testing-library/react';
