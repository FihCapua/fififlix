import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    max-width: 450px;
    height: 40px;
    margin: 0 auto 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    padding: 10px;
    outline: none;
    color: ${({ theme }) => theme.colors.secondary.dark};
    border: 2px solid ${({ theme }) => theme.colors.secondary.dark};
    border-radius: 4px;
    transition: background 0.2s ease-in;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary.dark};
        color: ${({ theme }) => theme.colors.primaryText};
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.secondary.main};
    }

    &[disabled] {
        background: ${({ theme }) => theme.colors.border};
        border: none;
        color: ${({ theme }) => theme.colors.primaryText};
        cursor: default;
    }
`;
