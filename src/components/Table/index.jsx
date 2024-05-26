import React from 'react';
import * as Styled from './styles';

export const Table = ({ headers, data }) => {
    return (
      <Styled.Table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <Styled.Th key={index}>{header}</Styled.Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <Styled.Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Styled.Td key={cellIndex}>{cell}</Styled.Td>
              ))}
            </Styled.Tr>
          ))}
        </tbody>
      </Styled.Table>
    );
  };