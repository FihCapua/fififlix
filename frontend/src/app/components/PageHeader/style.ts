import styled from "styled-components";

export const Container = styled.header`
    margin: 0 45px;

    a {
        text-decoration: none;
        display: flex;
        align-items: center;

        span {
            color: ${({ theme }) => theme.colors.white};
            font-weight: bold;
        }

        img {
            width: 15px;
            margin-right: 8px;
            transform: rotate(-90deg);
        }
    }

    h1 {
        font-size: 24px;
        margin-top: 24px;
    }
`;
