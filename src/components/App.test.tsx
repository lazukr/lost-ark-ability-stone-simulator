import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test("renders main menu", () => {
  render(<App />);
  const epicStone = screen.getByText(/Epic/i);
  expect(epicStone).toBeInTheDocument();
});

test("renders ability stone ui", () => {
  render(<App />);
  const successRates = screen.getByText(/Success Rates: 75%/i);
  expect(successRates).toBeInTheDocument();
});
