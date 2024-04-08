import { Container, HeaderMovies } from "./style.ts";

export function MoviesList() {
  return (
    <Container>
      <HeaderMovies>
        <span>3 filmes</span>
        <a href="/">Cadastrar novo filme</a>
      </HeaderMovies>
    </Container>
  );
}
