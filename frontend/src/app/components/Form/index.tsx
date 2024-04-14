import React, { useState } from "react";
import { Button } from "../Button";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { ButtonContainer, Form } from "./style";

export function MovieForm({ buttonLabel }: { buttonLabel: string }) {
  const [formData, setFormData] = useState({
    title: "",
    movieImage: "",
    country: "",
    genre: "",
    year: "",
    rating: "",
    director: "",
    scriptwriter: "",
    actors: "",
    watchList: false,
    stars: 0,
    comments: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name, value, type, checked,
    } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup error={formData.title === "" ? "O campo título do filme é obrigatório" : ""}>
        <Input type="text" name="title" placeholder="Título do filme" value={formData.title} onChange={handleChange} error={formData.title === ""} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="movieImage" placeholder="Capa do filme" value={formData.movieImage} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="country" placeholder="Páis de origem" value={formData.country} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="genre" placeholder="Gênero" value={formData.genre} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="year" placeholder="Ano de lançamento" value={formData.year} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="rating" placeholder="Avaliação" value={formData.rating} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="director" placeholder="Diretor" value={formData.director} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="scriptwriter" placeholder="Roteirista" value={formData.scriptwriter} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="actors" placeholder="Principais atores" value={formData.actors} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <div className="checkbox-form">
          <span>Já assistiu?</span>
          <Input type="checkbox" name="watchList" checked={formData.watchList} onChange={() => setFormData((prevState) => ({ ...prevState, watchList: !prevState.watchList }))} />
          <span>{formData.watchList ? "Sim" : "Não"}</span>
        </div>
      </FormGroup>

      <FormGroup>
        <Input type="text" name="stars" placeholder="Quantas estrelas?" value={formData.stars} onChange={handleChange} />
      </FormGroup>

      <FormGroup>
        <Input type="text" name="comments" placeholder="Comentários" value={formData.comments} onChange={handleChange} />
      </FormGroup>

      <ButtonContainer>
        <Button type="submit" className="btn-registry">{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}
