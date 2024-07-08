import React from "react";
import { StyledButton } from "./style";
import { Loader } from "../Loader";

type ButtonProps = {
    type?: "button" | "submit" | "reset"
    disabled?: boolean
    isLoading?: boolean
    danger?: boolean
    onClick?: () => void
    children: React.ReactNode
}

export function Button({
  type, disabled, isLoading, danger, onClick, children,
}: ButtonProps) {
  return (
    <StyledButton type={type} danger={danger} disabled={disabled || isLoading} onClick={onClick}>
      {!isLoading && children}
      {isLoading && <Loader isLoading={isLoading} />}
    </StyledButton>
  );
}
