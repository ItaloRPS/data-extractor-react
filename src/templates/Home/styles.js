import styled ,{css}from "styled-components";

export const Content = styled.div`
  box-shadow: -2px 4px 5px -4px black;
  background: #f8f8f8;
  border-radius: 5px;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`;

export const containerSeasch = styled.div`
  ${({ theme }) => css`
  width: 100%;
    display: flex;
    gap: 9px;
    flex-direction: row;
    margin-bottom: 25px;
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

export const H3 = styled.h3`
  ${({ theme }) => css`
  color: #4f4f4f;
  font-weight: 200;|
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
  color: #4f4f4f;
  font-weight: 200;
  margin-left: 12px;
  margin-top: 8px;
  `}
`;