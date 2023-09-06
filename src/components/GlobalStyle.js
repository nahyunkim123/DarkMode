
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{margin:0; padding:0; font-family: 'intelone-mono-font-family-regular';}
    ul{list-style:none;
    }
    @font-face {
    font-family: 'intelone-mono-font-family-regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2307-1@1.1/intelone-mono-font-family-regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
    
}
a{text-decoration:none; color:black;}
`


export default GlobalStyle