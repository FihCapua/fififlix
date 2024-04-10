import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  Card,
  CarouselCard,
  CarouselCardContainer,
  Container, HeaderMovies, HoldMovies, InputSearchContainer, ListMovies, MovieComments, MoviesDetails, MoviesResume, StarRating,
} from "./style";

import { starRating } from "../../utils/starRating";
import { countryFlag } from "../../utils/countryFlagImg";

import arrow from "../../assets/images/icons/arrow.svg";
import eyeOff from "../../assets/images/icons/eye-off.svg";
import eyeOpen from "../../assets/images/icons/eye-open.svg";
import edit from "../../assets/images/icons/edit.svg";
import trash from "../../assets/images/icons/trash.svg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 900 },
    items: 3,
    partialVisibilityGutter: 42,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 32,
  },
  mobile: {
    breakpoint: { max: 464, min: 300 },
    items: 3,
    partialVisibilityGutter: 20,
  },
};

const list = [
  {
    id: "72c599ce-6b36-4ee6-a11f-8a5b6f42b3c5",
    category_id: null,
    title: "Interestelar",
    country_of_origin: "Estados Unidos",
    year: "2014",
    director: "Christopher Nolan",
    movie_scriptwriter: "Jonathan Nolan, Christopher Nolan",
    movie_starring: "",
    genre: "Drama/Fiction",
    image_url: "https://br.web.img3.acsta.net/c_310_420/pictures/14/10/31/20/39/476171.jpg",
    score: "9.2",
    film_review: "Ótimo",
    stars: "5",
    comments: " Um dos meu filmes favoritos. Super trilha sonora ganhadora de um Oscar. História fabulosa e que algum tempo depois descobriram que não é nada fantasiosa e que faz todo o sentido segundo a física. Direção de fotografia fantástica.",
    watched: "true",
  },
  {
    id: "5cd3133c-36c3-4d55-854f-d534c03582ec",
    category_id: null,
    title: "The Godfather",
    country_of_origin: "Estados Unidos",
    year: "1972",
    director: "Francis Ford Coppola",
    movie_scriptwriter: "Mario Puzo",
    movie_starring: "Marlon Brando, Al Pacino, James Caan",
    genre: "Drama",
    image_url: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    score: "9.2",
    film_review: "Ótimo",
    stars: "5",
    comments: "Um dos meus filmes preferidos (TOP 1), roteiro impecável.",
    watched: "true",
  },
  {
    id: "6d882407-cf10-449a-bc94-fdd99d49cc6c",
    category_id: null,
    title: "V for Vendetta",
    country_of_origin: "Estados Unidos",
    year: "2006",
    director: "James McTeigue",
    movie_scriptwriter: "Lilly Wachowski, Lana Wachowski",
    movie_starring: "Natalie Portman, Hugo Weaving, Dustin Hoffman",
    genre: "Drama/Fiction",
    image_url: "https://br.web.img2.acsta.net/pictures/210/506/21050637_20131017235623573.jpg",
    score: "8.4",
    film_review: "Ótimo",
    stars: "5",
    comments: "Um dos meus filmes preferidos, roteiro impecável, fotografia perfeita, nem parece ser uma história de (herói) da DC que estamos acostumados.",
    watched: "false",
  },
];

export default function Home() {
  return (
    <>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar título" />
      </InputSearchContainer>
      <Container>
        <HeaderMovies>
          <span>3 filmes</span>
          <Link to="/new">Cadastrar novo filme</Link>
        </HeaderMovies>

        <ListMovies>
          <header>
            <button type="button">
              <span>Nome</span>
              <img src={arrow} alt="seta" />
            </button>
          </header>

          <Card>

            <Carousel
              itemClass="image-item"
              responsive={responsive}
              showDots
              infinite
              transitionDuration={300}
              autoPlay={false}
              autoPlaySpeed={1800}
              centerMode
              swipeable
            >
              {list.map((movie) => (
                <CarouselCardContainer>
                  <CarouselCard>
                    <h4>{movie.title}</h4>
                    <img src={movie.image_url} alt={movie.title} />
                    <MoviesDetails>
                      <img src={countryFlag(movie.country_of_origin) || ""} alt={movie.country_of_origin} />
                      <span>{movie.genre}</span>
                      {" "}
                        &nbsp;  &nbsp;
                      <span>{movie.year}</span>
                      {" "}
                        &nbsp;  &nbsp;
                      <span>{movie.film_review}</span>
                    </MoviesDetails>
                    <MoviesResume>
                      <span>
                        Direção:
                        {" "}
                        &nbsp;  &nbsp;
                        {movie.director}
                      </span>
                      {" "}
                        &nbsp;  &nbsp;
                      <span>
                        Roteiro:
                        {" "}
                        &nbsp;  &nbsp;
                        {movie.movie_scriptwriter}
                      </span>
                      {" "}
                        &nbsp;  &nbsp;
                      <span>
                        Principais atores:
                        {" "}
                        &nbsp;  &nbsp;
                        {movie.movie_starring}
                      </span>

                      <span>
                        Já assistiu:
                        {" "}
                        &nbsp;  &nbsp;
                        {movie.watched === "true" ? <img src={eyeOpen} alt="eye" className="watched-movie" /> : <img src={eyeOff} alt="eye" className="watched-movie" />}
                      </span>
                    </MoviesResume>
                    <StarRating>
                      <span>Classificação: </span>
                      {" "}
                        &nbsp;  &nbsp;
                      {starRating(movie.stars)}
                    </StarRating>
                    <MovieComments>
                      &quot;
                      {" "}
                      <span>{movie.comments}</span>
                      {" "}
                      &quot;
                    </MovieComments>

                    <HoldMovies>
                      <Link to="/">
                        <img src={edit} alt="editar" />
                      </Link>

                      <button type="button">
                        <img src={trash} alt="excluir" />
                      </button>
                    </HoldMovies>
                  </CarouselCard>
                </CarouselCardContainer>
              ))}
            </Carousel>
          </Card>
        </ListMovies>
      </Container>
    </>
  );
}
