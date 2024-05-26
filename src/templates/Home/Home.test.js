import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { HomeTemplate } from './';
import { Invoice } from "../../control/invoice/invoice.control";

jest.mock("../../control/invoice/invoice.control", () => ({
  getHitoryClients: jest.fn(),
}));

describe('HomeTemplate Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    sessionStorage.clear();
  });

  it('renders "Bem Vindo!" heading', () => {
    render(<HomeTemplate />);
    expect(screen.getByText('Bem Vindo!')).toBeInTheDocument();
  });

  it('displays client number if client is set', () => {
    render(<HomeTemplate />);
    expect(screen.getByText('Por favor, informe o número do cliente.')).toBeInTheDocument();
    
    const clientNumber = '12345';
    sessionStorage.setItem('nclient', clientNumber);
    render(<HomeTemplate />);
    expect(screen.getByText(`Cliente nº: ${clientNumber}`)).toBeInTheDocument();
  });

  it('displays error message if client is not found', async () => {
    Invoice.getHitoryClients.mockResolvedValueOnce([]);
    render(<HomeTemplate />);

    const input = screen.getByPlaceholderText('Nº Cliente');
    fireEvent.change(input, { target: { value: '123' } });
    const button = screen.getByText('Buscar');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Cliente não encontrado!')).toBeInTheDocument();
    });
  });

});
