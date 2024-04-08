import styled from "styled-components";

export const Container = styled.header`
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    img {
        width: 300px;
    }
`;

export const InputSearchContainer = styled.div`
    margin-top: 48px;
    width: 100%;
    display: flex;
    justify-content: center;

    input {
        width: 70%;
        border: 1px solid ${({ theme }) => theme.colors.border};
        border-radius: 25px;
        height: 50px;
        padding: 10px;
        color: ${({ theme }) => theme.colors.white};
    }
`;
