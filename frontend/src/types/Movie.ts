export interface Movie {
    id?: string;
    comments: string;
    countryOfOrigin: string;
    director: string;
    filmReview: string;
    genre: string;
    imageUrl: string;
    movieScriptwriter: string;
    movieStarring: string;
    score: string;
    stars: number | string;
    title: string;
    watched: boolean;
    year: string;
}

export type MovieProps = {
    id?: string;
    comments: string;
    country_of_origin: string;
    director: string;
    film_review: string;
    genre: string;
    image_url: string;
    movie_scriptwriter: string;
    movie_starring: string;
    score: string;
    stars: number | string;
    title: string;
    watched: boolean;
    year: string;
}

export type MovieFormProps = {
    buttonLabel: string;
    // eslint-disable-next-line no-unused-vars
    onSubmit?: (formData: Movie) => void;
}

export type MovieFormRef = {
    // eslint-disable-next-line no-unused-vars
    setFieldsValue: (movie: Movie) => void;
}
