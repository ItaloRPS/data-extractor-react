import styled, { css } from 'styled-components';

export const containerSeasch = styled.div`
  ${({ theme }) => css`
  width: 100%;
    display: flex;
    gap: 9px;
    flex-direction: row;
    margin-bottom: 25px;
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    text-align: -webkit-center;
    display: block;
    cursor: pointer;

    &:hover{
      color:blue
    }
    &:active {
      color: -webkit-activelink;
    }
  `}

`;
export const Button = styled.button`
    background-color: black;
    border: none;
    color: white;
    padding: 10px 27px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 5px 2px;
    margin-top: 20px;
    cursor: pointer;
    border-radius: 8px;
  
  &:hover {
    background-color:#333; 
  }
`;