import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useEffect, useState } from "react";
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
import { Movie } from "../../types";

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

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
      .then(async (response) => {
        const json = await response.json();
        setMovies(json);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, []);

  return (
    <>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar título" />
      </InputSearchContainer>
      <Container>
        <HeaderMovies>
          <span>
            {movies.length}
            {movies.length === 1 ? " filme" : " filmes"}
            {" "}
          </span>
          <Link to="/new-movie">Cadastrar novo filme</Link>
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
              {movies.length > 0 && movies.map((movie, index) => (
                <CarouselCardContainer key={index}>
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
                      <Link to={`/edit-movie/${movie.id}`}>
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
