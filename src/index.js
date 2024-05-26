import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {theme} from '../src/styles/theme';
import {GlobalStyle} from '../src/styles/styles-global';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
  <GlobalStyle/>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ThemeProvider>
  </React.StrictMode>
);
