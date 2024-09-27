import HttpClient from "./utils/HttpClient";

// Singleton
class MoviesServices {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient("http://localhost:3000");
  }

  listMovies(orderBy: string = "asc") {
    return this.httpClient.get(`/movies?orderBy=${orderBy}`);
  }

  getMovieById(id: string) {
    return this.httpClient.get(`/movies/${id}`);
  }

  createMovie(movie: any) {
    return this.httpClient.post("/movies", movie);
  }

  updateMovie(id: string, movie: any) {
    return this.httpClient.put(`/movies/${id}`, movie);
  }
}

export default new MoviesServices();
