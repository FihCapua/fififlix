import { MovieForm } from "../../app/components/Form";
import { PageHeader } from "../../app/components/PageHeader";
import MoviesServices from "../../services/MoviesServices";
import { Movie } from "../../types";
import { Toast } from "../../utils/toast";

export default function NewMovie() {
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
        movie_starring: formData.movieStarring,
        score: formData.score,
        stars: formData.stars,
        title: formData.title,
        watched: formData.watched,
        year: formData.year,
      };

      await MoviesServices.createMovie(movie);

      Toast({ type: "success", text: "Filme criado com sucesso!" });
    } catch {
      Toast({ type: "danger", text: "Erro ao criar o filme!" });
    }
  };

  return (
    <>
      <PageHeader title="Cadastrar novo filme" />

      <MovieForm
        buttonLabel="Cadastrar novo filme"
        onSubmit={handleSubmit}
      />
    </>
  );
}
