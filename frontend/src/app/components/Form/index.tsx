import React, { useState } from "react";
import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { ButtonContainer, Form } from "./style";
import { Movie } from "../../../types";

// eslint-disable-next-line no-unused-vars
export function MovieForm({ buttonLabel, onSubmit }: { buttonLabel: string, onSubmit: (formData: Movie) => void }) {
  const [formData, setFormData] = useState<Movie>({
    title: "",
    comments: "",
    countryOfOrigin: "",
    director: "",
    filmReview: "",
    genre: "",
    imageUrl: "",
    movieScriptwriter: "",
    movieStarring: "",
    score: "",
    stars: 0,
    watched: false,
    year: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name, value, type, checked,
    } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (name === "title") {
      setIsFormValid(value.trim() !== "");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={formData.title === "" ? "O campo título do filme é obrigatório" : ""}>
        <Input type="text" name="title" placeholder="Título do filme" value={formData.title} onChange={handleChange} error={formData.title === ""} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="imageUrl" placeholder="Capa do filme" value={formData.imageUrl} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="countryOfOrigin" placeholder="Páis de origem" value={formData.countryOfOrigin} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="genre" placeholder="Gênero" value={formData.genre} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="year" placeholder="Ano de lançamento" value={formData.year} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="score" placeholder="Avaliação" value={formData.score} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="director" placeholder="Diretor" value={formData.director} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="movieScriptwriter" placeholder="Roteirista" value={formData.movieScriptwriter} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="movieStarring" placeholder="Principais atores" value={formData.movieStarring} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <div className="checkbox-form">
          <span>Já assistiu?</span>
          <Input type="checkbox" name="watched" checked={formData.watched} onChange={() => setFormData((prevState) => ({ ...prevState, watched: !prevState.watched }))} />
          <span>{formData.watched ? "Sim" : "Não"}</span>
        </div>
      </FormGroup>

      <FormGroup>
        <Input type="text" name="stars" placeholder="Quantas estrelas?" value={formData.stars} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="comments" placeholder="Comentários" value={formData.comments} onChange={handleChange} />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" className="btn-registry" disabled={!isFormValid}>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
