import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    * {
        padding: 0;
        margin: 0;
    }
    
    body {
        background-color:green;
    }
`

export default GlobalStyle;