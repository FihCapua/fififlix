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
  async findAll(orderyBy = 'ASC') {
    const direction = orderyBy.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
    const rows = await database.query(`SELECT * FROM movies ORDER BY title ${direction}`);

    return rows;
  }

  async findById(id) {
    const [row] = await database.query('SELECT * FROM movies WHERE id = $1', [id]);

    return row;
  }

  async findByTitle(title) {
    const [row] = await database.query('SELECT * FROM movies WHERE title = $1', [title]);

    return row;
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
    watched,
  }) {
    const [row] = await database.query(`
        INSERT INTO movies(category_id, title, country_of_origin, year, director, movie_scriptwriter, movie_starring, genre, image_url, score, film_review, stars, comments, watched)
        VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
        RETURNING *
    `, [category_id, title, country_of_origin, year, director, movie_scriptwriter, movie_starring, genre, image_url, score, film_review, stars, comments, watched]);

    return row;
  }

  async update(id, {
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
    watched,
  }) {
    const [row] = await database.query(`
        UPDATE movies
        SET category_id = $1, title = $2, country_of_origin = $3, year = $4, director = $5, movie_scriptwriter = $6, movie_starring = $7, genre = $8, image_url = $9, score = $10, film_review = $11, stars = $12, comments = $13, watched = $14
        WHERE id = $15
        RETURNING *
    `, [category_id, title, country_of_origin, year, director, movie_scriptwriter, movie_starring, genre, image_url, score, film_review, stars, comments, watched, id]);

    return row;
  }

  delete(id) {
    return new Promise((resolve) => {
      movies = movies.filter((movie) => movie.id !== id);

      resolve();
    });
  }
}

module.exports = new MovieRepository();
