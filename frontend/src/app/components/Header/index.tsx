import { Container, InputSearchContainer } from "./style.ts";
import Logo from "../../../assets/images/Fififlix.svg";

export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo" />

      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar título" />
      </InputSearchContainer>
    </Container>
  );
}
