import styled, { css } from 'styled-components';


export const AlertWrapper = styled.div`
  ${({ theme }) => css`
  padding: 15px;
  margin: 10px 0;
  border-radius: 4px;
  font-family: Arial, sans-serif;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  `}
`;

