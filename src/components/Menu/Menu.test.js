import React from 'react';
import { render, screen } from '@testing-library/react';
import { Menu } from './';

jest.mock('./styles', () => ({
  Wrapper: (props) => <div {...props} />,
  Link: (props) => <a {...props} />,
}));

describe('Menu Component', () => {
  it('renders Dashboard link', () => {
    render(<Menu />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });

  it('renders Biblioteca de Faturas link', () => {
    render(<Menu />);
    expect(screen.getByText('Biblioteca de Faturas')).toBeInTheDocument();
  });

  it('links have correct href attributes', () => {
    render(<Menu />);
    expect(screen.getByText('Dashboard').closest('a')).toHaveAttribute('href', '/');
    expect(screen.getByText('Biblioteca de Faturas').closest('a')).toHaveAttribute('href', '/invoices');
  });
});
