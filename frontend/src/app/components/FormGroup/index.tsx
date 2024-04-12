import React from "react";
import { Container } from "./style";

export function FormGroup({ children, error }: { children: React.ReactNode, error?: string }) {
  return (
    <Container>
      {children}
      {error && <span>{error}</span>}
    </Container>
  );
}
