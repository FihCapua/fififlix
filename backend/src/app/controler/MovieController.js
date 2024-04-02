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

  store() {
    // Cria um novo registro
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
