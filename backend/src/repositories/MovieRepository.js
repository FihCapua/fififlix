const database = require('../database');

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

  async delete(id) {
    const deleteOperation = await database.query('DELETE FROM movies WHERE id = $1', [id]);

    return deleteOperation;
  }
}

module.exports = new MovieRepository();
