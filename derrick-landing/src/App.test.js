import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Derrick landing page', () => {
  render(<App />);
  const titleElement = screen.getByText(/Pain is information/i);
  expect(titleElement).toBeInTheDocument();
});
