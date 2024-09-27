import { useEffect, useRef, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import MoviesServices from "../../services/MoviesServices";

import { MovieForm } from "../../app/components/Form";
import { PageHeader } from "../../app/components/PageHeader";
import { Loader } from "../../app/components/Loader";
import { Toast } from "../../utils/toast";
import { Movie, MovieFormRef } from "../../types";

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

  const handleSubmit = async (formData: Movie) => {
    try {
      const movie = {
        id: formData.id,
        comments: formData.comments,
        country_of_origin: formData.countryOfOrigin,
        director: formData.director,
        film_review: formData.filmReview,
        genre: formData.genre,
        image_url: formData.imageUrl,
        movie_scriptwriter: formData.movieScriptwriter,
        movie_starring: formData.movieScriptwriter,
        score: formData.score,
        stars: formData.stars,
        title: formData.title,
        watched: formData.watched,
        year: formData.year,
      };

      const updateMovieData = await MoviesServices.updateMovie(id, movie);

      setMovieName(updateMovieData.title);

      Toast({ type: "success", text: "Filme editado com sucesso!", duration: 5000 });
    } catch {
      Toast({ type: "danger", text: "Erro ao editar o filme!", duration: 5000 });
    }
  };

  return (
    <>
      <Loader isLoading={isLoading} fullScreen size="32px" />

      <PageHeader title={isLoading ? "Carregando..." : `Editar filme: ${movieName}`} />

      <MovieForm ref={movieFormRef} buttonLabel="Editar filme" onSubmit={handleSubmit} />
    </>
  );
}
