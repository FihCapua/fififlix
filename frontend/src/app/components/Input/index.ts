import styled, { css } from "styled-components";

interface InputProps {
    error?: boolean;
}

export const Input = styled.input<InputProps>`
    width: 100%;
    max-width: 450px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    background-color: ${({ theme }) => theme.colors.white};
    padding: 10px;
    outline: none;
    border: none;
    border-radius: 4px;

    &:focus {
        border: 2px solid ${({ theme }) => theme.colors.secondary.main};
    }

    ${({ theme, error }) => error && css`
        color: ${theme.colors.primary.light};
        border-color: ${theme.colors.primary.light} !important;
    `}

    &[disabled] {
        background-color: ${({ theme }) => theme.colors.border};
        border: none;
        opacity: 1;
    }
`;
