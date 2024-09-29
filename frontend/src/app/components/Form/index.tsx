import React, { forwardRef, useImperativeHandle, useState } from "react";
import { FormGroup } from "../FormGroup";
import { Input } from "../Input";
import { ButtonContainer, Form } from "./style";
import { Movie, MovieFormProps, MovieFormRef } from "../../../types";
import { Button } from "../Button";
import { Loader } from "../Loader";

const initialFormData: Movie = {
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
  stars: "",
  watched: false,
  year: "",
};

export const MovieForm = forwardRef<MovieFormRef, MovieFormProps>(
  ({ buttonLabel, onSubmit }, ref) => {
    const [formData, setFormData] = useState<Movie>(initialFormData);
    const [isLoading, setIsLoading] = useState(false);

    useImperativeHandle(ref, () => ({
      setFieldsValue: (movie: Movie) => {
        setFormData({
          ...movie,
        });
      },

      resetFields() {
        setFormData(initialFormData);
      },
    }), []);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {
        name, value, type, checked,
      } = event.target;

      setFormData((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value,
      }));
    };

    const handleSubmit = async (
      event: React.FormEvent<HTMLFormElement>,
    ) => {
      event.preventDefault();
      setIsLoading(true);

      try {
        await onSubmit?.(formData);
      } catch {
        /* empty */
      } finally {
        setIsLoading(false);
      }
    };

    return (
      <>
        <Loader isLoading={isLoading} fullScreen size="32px" />

        <Form onSubmit={handleSubmit}>
          <FormGroup
            error={
              formData.title === ""
                ? "O campo título do filme é obrigatório"
                : ""
            }
          >
            <Input
              type="text"
              name="title"
              placeholder="Título do filme"
              value={formData.title}
              onChange={handleChange}
              error={formData.title === ""}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="imageUrl"
              placeholder="Capa do filme"
              value={formData.imageUrl}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="countryOfOrigin"
              placeholder="Páis de origem"
              value={formData.countryOfOrigin}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="genre"
              placeholder="Gênero"
              value={formData.genre}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="year"
              placeholder="Ano de lançamento"
              value={formData.year}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="score"
              placeholder="Avaliação"
              value={formData.score}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="director"
              placeholder="Diretor"
              value={formData.director}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="movieScriptwriter"
              placeholder="Roteirista"
              value={formData.movieScriptwriter}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="movieStarring"
              placeholder="Principais atores"
              value={formData.movieStarring}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <div className="checkbox-form">
              <span>Já assistiu?</span>
              <Input
                type="checkbox"
                name="watched"
                checked={formData.watched}
                onChange={() => setFormData((prevState) => ({
                  ...prevState,
                  watched: !prevState.watched,
                }))}
                disabled={isLoading}
              />
              <span>{formData.watched ? "Sim" : "Não"}</span>
            </div>
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="stars"
              placeholder="Quantas estrelas?"
              value={formData.stars}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <FormGroup>
            <Input
              type="text"
              name="comments"
              placeholder="Comentários"
              value={formData.comments}
              onChange={handleChange}
              disabled={isLoading}
            />
          </FormGroup>

          <ButtonContainer>
            <Button
              type="submit"
              isLoading={isLoading}
            >
              {buttonLabel}
            </Button>
          </ButtonContainer>
        </Form>
      </>
    );
  },
);
