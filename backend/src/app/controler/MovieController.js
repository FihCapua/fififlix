class MovieController {
  index(req, res) {
    // Lista todos os registros
    res.send('Send from movie controller');
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
