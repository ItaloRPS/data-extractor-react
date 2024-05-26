  import React from 'react';
  import * as Styled from './styles';

  export const Menu = () => {
    return (
      <Styled.Wrapper>
        <Styled.Link href="/">
          Dashboard
        </Styled.Link>
        <Styled.Link href="/invoices">
          Biblioteca de Faturas
        </Styled.Link>
      </Styled.Wrapper>
    );
  };