import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { ButtonContainer, Form } from "./style";

export function MovieForm({ buttonLabel }: { buttonLabel: string }) {
  return (
    <Form>
      <FormGroup error="O campo título do filme é obrigatório">
        <Input type="text" placeholder="Título do filme" error />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Capa do filme" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Páis de origem" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Gênero" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Ano de lançamento" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Capa do filme" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Avaliação" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Diretor" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Roteirista" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Principais atores" />
      </FormGroup>

      <FormGroup>
        <div className="checkbox-form">
          <span>Já assistiu?</span>
          <Input type="checkbox" value="true" />
          <span>Sim</span>

          <Input type="checkbox" value="false" />
          <span>Não</span>
        </div>
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Quantas estrelas?" />
      </FormGroup>

      <FormGroup>
        <Input type="text" placeholder="Comentários" className="input-comments" />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" className="btn-registry">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
