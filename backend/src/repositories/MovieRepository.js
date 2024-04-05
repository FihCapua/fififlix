// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuid } = require('uuid');

const database = require('../database');

let movies = [
  {
    id: uuid(),
    category_id: uuid(),
    title: 'The Godfather',
    country_of_origin: 'Estados Unidos',
    year: 1972,
    director: 'Francis Ford Coppola',
    movie_scriptwriter: 'Mario Puzo',
    movie_starring: 'Marlon Brando, Al Pacino, James Caan',
    genre: 'Drama',
    image_url: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
    score: 9.2,
    film_review: 'Ótimo',
    stars: 5,
    comments: 'Um dos meus filmes preferidos (TOP 1), roteiro impecável.',
  },
  {
    id: uuid(),
    category_id: uuid(),
    title: 'V for Vendetta',
    country_of_origin: 'Estados Unidos',
    year: 2006,
    director: 'James McTeigue',
    movie_scriptwriter: 'Lilly Wachowski, Lana Wachowski',
    movie_starring: 'Natalie Portman, Hugo Weaving, Dustin Hoffman',
    genre: 'Drama/Fiction',
    image_url: 'https://br.web.img2.acsta.net/pictures/210/506/21050637_20131017235623573.jpg',
    score: 8.4,
    film_review: 'Ótimo',
    stars: 5,
    comments: 'Um dos meus filmes preferidos, roteiro impecável, fotografia perfeita, nem parece ser uma história de (herói) da DC que estamos acostumados.',
  },
];

class MovieRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(movies);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(
        movies.find((movie) => movie.id === id),
      );
    });
  }

  findByTitle(title) {
    return new Promise((resolve) => {
      resolve(
        movies.find((movie) => movie.title === title),
      );
    });
  }

  async create({
    category_id,
    title,
    country_of_origin,
    year,
    director,
    movie_scriptwriter,
    movie_starring,
    genre,
    image_url,
    score,
    film_review,
    stars,
    comments,
  }) {
    const [row] = await database.query(`
        INSERT INTO movies(category_id, title, country_of_origin, year, director, movie_scriptwriter, movie_starring, genre, image_url, score, film_review, stars, comments)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
        RETURNING *
    `, [category_id, title, country_of_origin, year, director, movie_scriptwriter, movie_starring, genre, image_url, score, film_review, stars, comments]);

    return row;
  }

  update(id, {
    category_id,
    title,
    country_of_origin,
    year,
    director,
    movie_scriptwriter,
    movie_starring,
    genre,
    image_url,
    score,
    film_review,
    stars,
    comments,
  }) {
    return new Promise((resolve) => {
      const updatedMovie = {
        id,
        category_id,
        title,
        country_of_origin,
        year,
        director,
        movie_scriptwriter,
        movie_starring,
        genre,
        image_url,
        score,
        film_review,
        stars,
        comments,
      };

      movies = movies.map((movie) => (movie.id === id ? updatedMovie : movie));

      resolve(updatedMovie);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      movies = movies.filter((movie) => movie.id !== id);

      resolve();
    });
  }
}

module.exports = new MovieRepository();
