import styled, { css } from "styled-components";

type ContainerProps = {
    type: "default" | "danger" | "success";
  };

const containerVariants: Record<string, any> = {
  default: css`
      background: ${({ theme }) => theme.colors.secondary.main};
    `,
  success: css`
      background: ${({ theme }) => theme.colors.success.main};
    `,
  danger: css`
      background: ${({ theme }) => theme.colors.primary.light};
    `,
};

export const Container = styled.div<ContainerProps>`
    padding: 16px 32px;
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white};
    font-weight: bold;
    border-radius: 4px;
    box-shadow: 8px 20px 20px -16px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    ${({ type }) => containerVariants[type] || containerVariants.default}

    img {
        width: 20px;
        height: 20px;
        margin-right: 8px;
    }

    & + & {
        margin: 12px;
    }
`;
