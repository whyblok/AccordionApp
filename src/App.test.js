import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/First text/i); //проверка рендера текста
  expect(linkElement).toBeInTheDocument();
});
