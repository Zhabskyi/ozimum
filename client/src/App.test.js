import React from 'react';
import { Provider } from 'react-redux';
import { store } from './index';
import { render } from '@testing-library/react';
import { app } from './index';

describe('Application', () => {
  it('renders without errors', () => {
    render(app);
  });
});
