import { Container } from "./style.ts";
import Logo from "../../../assets/images/Fififlix.svg";

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />
    </Container>
  );
}
