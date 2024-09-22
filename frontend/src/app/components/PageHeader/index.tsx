import { Link, useHistory } from "react-router-dom";
import arrow from "../../../assets/images/icons/arrow.svg";
import { Container } from "./style";

export function PageHeader({ title }: { title: string }) {
  const history = useHistory();

  const handleBack = () => {
    history.push("/");
    window.location.reload();
  };

  return (
    <Container>
      <Link to="/" onClick={handleBack}>
        <img src={arrow} alt="voltar" />
        <span>Voltar</span>

      </Link>
      <h1>{title}</h1>
    </Container>
  );
}
