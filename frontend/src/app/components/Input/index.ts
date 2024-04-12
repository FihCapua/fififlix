import styled from "styled-components";

export const Input = styled.input`
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
`;
