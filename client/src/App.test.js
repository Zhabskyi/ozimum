import React from 'react';
import { Provider } from 'react-redux';
import { store } from './index';
import { render } from '@testing-library/react';
import App from './App';

test('renders header text', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const headerText = getByText('OZIMUM');
  expect(headerText).toBeInTheDocument();
});
