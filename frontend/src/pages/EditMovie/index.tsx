import { useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import MoviesServices from "../../services/MoviesServices";

import { MovieForm } from "../../app/components/Form";
import { PageHeader } from "../../app/components/PageHeader";
import { Loader } from "../../app/components/Loader";
import { Toast } from "../../utils/toast";
import { MovieFormRef } from "../../types";

export default function EditMovie() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);
  const [movieName, setMovieName] = useState("");

  const movieFormRef = useRef<MovieFormRef>(null);

  useEffect(() => {
    async function loadContact() {
      try {
        const movieData = await MoviesServices.getMovieById(id);

        const movie = {
          id: movieData.id,
          comments: movieData.comments,
          countryOfOrigin: movieData.country_of_origin,
          director: movieData.director,
          filmReview: movieData.film_review,
          genre: movieData.genre,
          imageUrl: movieData.image_url,
          movieScriptwriter: movieData.movie_scriptwriter,
          movieStarring: movieData.movie_starring,
          score: movieData.score,
          stars: movieData.stars,
          title: movieData.title,
          watched: movieData.watched,
          year: movieData.year,
        };

        if (movieFormRef.current) {
          movieFormRef.current.setFieldsValue(movie);
          Toast({ type: "success", text: "Filme encontrado com sucesso!", duration: 5000 });
        }

        setIsLoading(false);
        setMovieName(movie.title);
      } catch {
        history.push("/");
        Toast({ type: "danger", text: "Filme não encontrado", duration: 5000 });
      }
    }

    loadContact();
  }, [id, history]);

  return (
    <>
      <Loader isLoading={isLoading} fullScreen size="32px" />

      <PageHeader title={isLoading ? "Carregando..." : `Editar filme: ${movieName}`} />

      <MovieForm ref={movieFormRef} buttonLabel="Editar filme" />
    </>
  );
}
