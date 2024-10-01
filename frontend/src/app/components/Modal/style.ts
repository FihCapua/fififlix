import styled from "styled-components";

interface ContainerProps {
    danger?: boolean;
}

export const Overlay = styled.div`
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(7px);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div<ContainerProps>`
    width: 100%;
    max-width: 450px;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    padding: 24px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);

    h5 {
        font-size: 22px;
        color: ${({ theme, danger }) => (danger ? theme.colors.primary.light : theme.colors.border)
};
    }

    p {
        margin-top: 8px;
        font-size: 14px;
        color: ${({ theme }) => theme.colors.border};
    }
`;

export const FooterModal = styled.footer`
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .cancel-btn {
        padding: 10px;
        background: transparent;
        border: 1px solid ${({ theme }) => theme.colors.secondary.main};
        font-size: 12px;
        margin: 0 15px 0 0;
        color: ${({ theme }) => theme.colors.secondary.main};

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondary.main};
            color: ${({ theme }) => theme.colors.white};
        }
    }

    .delete-btn {
        margin: 0;
        border: none;
    }
`;
