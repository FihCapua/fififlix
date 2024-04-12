import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Sora', sans-serif;
    }

    body {
        font-size: 18px;
        color: ${({ theme }) => theme.colors.primaryText};
        background: ${({ theme }) => theme.colors.backgroundColor};

        span {
            font-size: 10px;
        }
    }

    button {
        cursor: pointer;
    }
`;
