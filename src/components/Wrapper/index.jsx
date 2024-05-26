import { RoutesApp } from '../../routes/routesApp';
import { Menu } from '../Menu';
import * as Styled from './styles';
// import {BrowserRouter} from "react-router-dom";

export function Wrapper({ children }) {
  return (
    <Styled.Wrapper>
      <Menu />
      <RoutesApp/>
    </Styled.Wrapper>
  );
}