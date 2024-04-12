import { MovieForm } from "../../app/components/Form";
import { PageHeader } from "../../app/components/PageHeader";

export default function EditMovie() {
  return (
    <>
      <PageHeader title="Editar filme" />

      <MovieForm buttonLabel="Editar filme" />
    </>
  );
}
