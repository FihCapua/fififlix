// Singleton
class MoviesServices {
  async listMovies(orderBy: string = "asc") {
    const response = await fetch(
      `http://localhost:3000/movies?orderBy=${orderBy}`,
    );

    return response.json();
  }
}

export default new MoviesServices();
