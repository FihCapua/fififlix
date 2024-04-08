import styled from "styled-components";

export const Container = styled.div`
    width: 70%;
    margin: 0 auto;
`;

export const HeaderMovies = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-weight: bold;
        font-size: 24px;
        color: ${({ theme }) => theme.colors.primaryText};
    }

    a {
        color: ${({ theme }) => theme.colors.secondary.dark};
        text-decoration: none;
        font-weight: bold;
        border: 2px solid ${({ theme }) => theme.colors.secondary.dark};
        border-radius: 4px;
        padding: 8px 16px;
        transition: all 0.2s ease-in;

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondary.main};
            color: ${({ theme }) => theme.colors.primaryText};
        }
    }
`;
