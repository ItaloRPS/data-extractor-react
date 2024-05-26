import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-width: 80rem;
    margin: 3rem auto;
    background: #f1f1f1;
    padding: 25px 55px 55px 55px;
    border-radius: 3px;
  `}
`;