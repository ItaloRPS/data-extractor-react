import React from 'react';
import { render, screen } from '@testing-library/react';
import { Table } from './';

jest.mock('./styles', () => ({
  Table: 'table',
  Th: 'th',
  Tr: 'tr',
  Td: 'td',
}));

describe('Table Component', () => {
  const headers = ['Header1', 'Header2', 'Header3'];
  const data = [
    ['Data1', 'Data2', 'Data3'],
    ['Data4', 'Data5', 'Data6'],
  ];

  it('renders table headers correctly', () => {
    render(<Table headers={headers} data={data} />);
    
    headers.forEach(header => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it('renders table data correctly', () => {
    render(<Table headers={headers} data={data} />);
    
    data.flat().forEach(cell => {
      expect(screen.getByText(cell)).toBeInTheDocument();
    });
  });
});
