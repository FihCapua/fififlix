import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";

import MoviesServices from "../../services/MoviesServices";

import { MovieForm } from "../../app/components/Form";
import { PageHeader } from "../../app/components/PageHeader";
import { Loader } from "../../app/components/Loader";
import { Toast } from "../../utils/toast";

export default function EditMovie() {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContact() {
      try {
        const movieData = await MoviesServices.getContactById(id);

        console.log({ movieData });
        Toast({ type: "success", text: "Filme encontrado com sucesso!", duration: 5000 });
        setIsLoading(false);
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

      <PageHeader title="Editar filme" />

      <MovieForm buttonLabel="Editar filme" />
    </>
  );
}
