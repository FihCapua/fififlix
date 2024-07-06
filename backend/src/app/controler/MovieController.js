/* eslint-disable max-len */
const MovieRepository = require('../../repositories/MovieRepository');
const isValidUUID = require('../utils/isValidUUID');

class MovieController {
  async index(req, res) {
    // Lista todos os registros
    const { orderBy } = req.query;

    const movies = await MovieRepository.findAll(orderBy);

    res.json(movies);
  }

  async show(req, res) {
    // Obtem UM registro

    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid movie ID' });
    }

    const movie = await MovieRepository.findById(id);

    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    res.json(movie);
  }

  async store(req, res) {
    // Cria um novo registro

    const {
      category_id, title, country_of_origin, year, director, movie_scriptwriter, movie_starring, genre, image_url, score, film_review, stars, comments, watched,
    } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    const movieExists = await MovieRepository.findByTitle(title);

    if (movieExists) {
      return res.status(400).json({ error: 'Movie already exists' });
    }

    const movie = await MovieRepository.create({
      category_id: category_id || null,
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
    });

    res.status(201).json(movie);
  }

  async update(req, res) {
    // Atualiza (edita) um registro

    const { id } = req.params;
    const {
      category_id, title, country_of_origin, year, director, movie_scriptwriter, movie_starring, genre, image_url, score, film_review, stars, comments, watched,
    } = req.body;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid movie ID' });
    }

    if (category_id && !isValidUUID(category_id)) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }

    const movieExists = await MovieRepository.findById(id);

    if (!movieExists) {
      return res.status(404).json({ error: 'Movie not found' });
    }

    const movieUpdate = await MovieRepository.update(id, {
      category_id: category_id || null,
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
    });

    res.json(movieUpdate);
  }

  async delete(req, res) {
    // Deleta um registro

    const { id } = req.params;

    if (!isValidUUID(id)) {
      return res.status(400).json({ error: 'Invalid movie ID' });
    }

    await MovieRepository.delete(id);
    res.sendStatus(204);
  }
}

module.exports = new MovieController();
