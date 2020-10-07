import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the UI', () => {
  const { getByText } = render(<App />);
  const accountNumberField = getByText(/Something/i);
  expect(accountNumberField).toBeInTheDocument();
});
