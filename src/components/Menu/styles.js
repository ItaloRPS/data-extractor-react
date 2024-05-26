import styled, { css } from 'styled-components';

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-flow: row wrap;
    margin-bottom: ${theme.spacings.large};
    border-bottom: solid 1px #4545451c;
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
      margin-right: ${theme.spacings.small};
      text-decoration: none;
      display: block;
      padding: ${theme.spacings.small} 0;
  `}
`;

