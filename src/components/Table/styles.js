import React from 'react';
import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }

  &:hover {
    background-color: #ddd;
  }
`;