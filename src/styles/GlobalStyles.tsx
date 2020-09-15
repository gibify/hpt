import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #E1F5FE;
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: Roboto, serif;
        font-size: 16px;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 500;
    }

    button {
        border: 0;
        cursor: pointer;
    }

    :root {
        --blue-ligth: #E1F5FE;
        --blue-medium: #75C8FF;
        --blue-dark: #33A6F2;
        --white: #FFFFFF;
        --black: #000000;
        --Gray: #777777;
    }
`;