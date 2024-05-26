import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:boder-box;
}

html{
    background: linear-gradient(130deg, rgba(3,75,54,1) 26%, rgba(0,160,88,1) 93%);
}

h1,h2,h3,h4,h5{
    font-family: 'Montserrat', sans-serif;
    margin: 18px 0;
}

a{
    color:${({theme})=>  theme.colors.darkerGray} ;
}

`;
