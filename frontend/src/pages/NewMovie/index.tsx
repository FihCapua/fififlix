import { useRef } from "react";
import { MovieForm } from "../../app/components/Form";
import { PageHeader } from "../../app/components/PageHeader";
import MoviesServices from "../../services/MoviesServices";
import { Movie, MovieFormRef } from "../../types";
import { Toast } from "../../utils/toast";

export default function NewMovie() {
  const movieFormRef = useRef<MovieFormRef>(null);

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

      await MoviesServices.createMovie(movie);

      movieFormRef?.current?.resetFields();

      Toast({ type: "success", text: "Filme criado com sucesso!", duration: 5000 });
    } catch {
      Toast({ type: "danger", text: "Erro ao criar o filme!", duration: 5000 });
    }
  };

  return (
    <>
      <PageHeader title="Cadastrar novo filme" />

      <MovieForm
        ref={movieFormRef}
        buttonLabel="Cadastrar novo filme"
        onSubmit={handleSubmit}
      />
    </>
  );
}
