CREATE DATABASE mymovies;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS movies (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    category_id UUID,
    title VARCHAR(255) NOT NULL,
    country_of_origin VARCHAR,
    year VARCHAR,
    director VARCHAR,
    movie_scriptwriter VARCHAR,
    movie_starring VARCHAR,
    genre VARCHAR,
    image_url VARCHAR,
    score VARCHAR,
    film_review VARCHAR,
    stars VARCHAR,
    comments VARCHAR,
    watched VARCHAR,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
