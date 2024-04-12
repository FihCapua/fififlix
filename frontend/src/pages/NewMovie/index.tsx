import { MovieForm } from "../../app/components/Form";
import { PageHeader } from "../../app/components/PageHeader";

export default function NewMovie() {
  return (
    <>
      <PageHeader title="Cadastrar novo filme" />

      <MovieForm buttonLabel="Cadastrar novo filme" />
    </>
  );
}
