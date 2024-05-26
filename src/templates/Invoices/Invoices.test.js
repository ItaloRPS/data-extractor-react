import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { IncoicesTemplate } from './index';
import { Invoice } from '../../control/invoice/invoice.control';

jest.mock('../../control/invoice/invoice.control');
jest.mock('react-icons/io5', () => ({
  IoDocumentOutline: () => <span>Icon</span>,
}));

beforeAll(() => {
  global.URL.createObjectURL = jest.fn();
});

describe('IncoicesTemplate', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    sessionStorage.clear();
  });

  it('renders without crashing', () => {
    render(<IncoicesTemplate />);
    expect(screen.getByText('Faturas')).toBeInTheDocument();
  });

  it('displays error message if client is not found', async () => {
    Invoice.getClient.mockResolvedValue({ data: [] });
    render(<IncoicesTemplate />);

    const input = screen.getByPlaceholderText('Nº Cliente');
    fireEvent.change(input, { target: { value: '123' } });
    const button = screen.getByText('Buscar');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Cliente não encontrado!')).toBeInTheDocument();
    });
  });

  it('fetches and displays invoice data for a valid client', async () => {
    const mockData = {
      data: [
        { reference: '123', expiredData: '2021-12-01', total: '100', accessKey: 'key123', document: 'doc123' },
      ],
    };
    Invoice.getClient.mockResolvedValue(mockData);
    render(<IncoicesTemplate />);

    const input = screen.getByPlaceholderText('Nº Cliente');
    fireEvent.change(input, { target: { value: '123' } });
    const button = screen.getByText('Buscar');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('123')).toBeInTheDocument();
      expect(screen.getByText('2021-12-01')).toBeInTheDocument();
      expect(screen.getByText('100')).toBeInTheDocument();
      expect(screen.getByText('Baixar')).toBeInTheDocument();
    });
  });

  it('calls downloadInvoice when Baixar link is clicked', async () => {
    const mockData = {
      data: [
        { reference: '123', expiredData: '2021-12-01', total: '100', accessKey: 'key123', document: 'doc123' },
      ],
    };
    Invoice.getClient.mockResolvedValue(mockData);
    Invoice.getDocument.mockResolvedValue({ status: 200, data: 'base64data' });
    render(<IncoicesTemplate />);

    const input = screen.getByPlaceholderText('Nº Cliente');
    fireEvent.change(input, { target: { value: '123' } });
    const button = screen.getByText('Buscar');
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Baixar')).toBeInTheDocument();
    });

    const baixarLink = screen.getByText('Baixar');
    fireEvent.click(baixarLink);

    await waitFor(() => {
      expect(Invoice.getDocument).toHaveBeenCalledWith('doc123');
    });
  });
});
