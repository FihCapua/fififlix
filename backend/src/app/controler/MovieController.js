const MovieRepository = require('../../repositories/MovieRepository');

class MovieController {
  async index(req, res) {
    // Lista todos os registros

    const movies = await MovieRepository.findAll();

    res.json(movies);
  }

  show() {
    // Obtem UM registro
  }

  store() {
    // Cria um novo registro
  }

  update() {
    // Atualiza (edita) um registro
  }

  delete() {
    // Deleta um registro
  }
}

module.exports = new MovieController();
