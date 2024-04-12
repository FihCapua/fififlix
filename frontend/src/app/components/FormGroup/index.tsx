import React from "react";
import { Container } from "./style";

export function FormGroup({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}
