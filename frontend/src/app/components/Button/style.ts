import styled, { css } from "styled-components";

interface ButtonProps {
    danger?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
    max-width: 450px;
    height: 40px;
    margin: 0 auto 15px;
    padding: 0 16px;
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
    display: flex;
    align-items: center;
    justify-content: center;

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

    ${({ theme, danger }) => danger && css`
        background: ${theme.colors.primary.main};
        border: none;
        color: ${theme.colors.primaryText};

        &:hover {
            background-color: ${theme.colors.primary.light};
        }
    `}
`;
