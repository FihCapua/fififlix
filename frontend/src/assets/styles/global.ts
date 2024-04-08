import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
        background: ${({ theme }) => theme.backgroundColor};
    }

    body {
        font-size: 18px;
        color: ${({ theme }) => theme.primaryText};
    }

    button {
        cursor: pointer;
    }
`;
