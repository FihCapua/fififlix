/* eslint-disable max-len */
const MovieRepository = require('../../repositories/MovieRepository');

class MovieController {
  async index(req, res) {
    // Lista todos os registros

    const movies = await MovieRepository.findAll();

    res.json(movies);
  }

  async show(req, res) {
    // Obtem UM registro

    const { id } = req.params;
    const movie = await MovieRepository.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie);
  }

  async store(req, res) {
    // Cria um novo registro

    const {
      category_id, title, country_of_origin, year, director, movie_scriptwriter, movie_starring, genre, image_url, score, film_review, stars, comments,
    } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const movieExists = await MovieRepository.findByTitle(title);

    if (movieExists) {
      return res.status(400).json({ error: 'Movie already exists' });
    }

    const movie = await MovieRepository.create({
      category_id, title, country_of_origin, year, director, movie_scriptwriter, movie_starring, genre, image_url, score, film_review, stars, comments,
    });

    res.json(movie);
  }

  update() {
    // Atualiza (edita) um registro
  }

  async delete(req, res) {
    // Deleta um registro

    const { id } = req.params;
    const movie = await MovieRepository.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    await MovieRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new MovieController();
