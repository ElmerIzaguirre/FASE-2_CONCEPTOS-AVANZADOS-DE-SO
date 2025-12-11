import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component tests', () => {
  it('renders system info title', () => {
    render(<App />);
    expect(screen.getByText('Ejercicio 3 — Información del Sistema')).toBeInTheDocument();
  });
});
