// eslint-disable-next-line import/no-extraneous-dependencies
const { uuid } = require('uuidv4');

const movies = [
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
];

class MovieRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(movies);
    });
  }
}

module.exports = new MovieRepository();
