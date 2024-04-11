import { Link } from "react-router-dom";
import arrow from "../../../assets/images/icons/arrow.svg";
import { Container } from "./style";

export function PageHeader({ title }: { title: string }) {
  return (
    <Container>
      <Link to="/">
        <img src={arrow} alt="voltar" />
        <span>Voltar</span>

      </Link>
      <h1>{title}</h1>
    </Container>
  );
}
