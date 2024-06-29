import HttpClient from "./utils/HttpClient";

// Singleton
class MoviesServices {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient("http://localhost:3000");
  }

  async listMovies(orderBy: string = "asc") {
    return this.httpClient.get(`/movies?orderBy=${orderBy}`);
  }

  async createMovie(movie: any) {
    return this.httpClient.post("/movies", movie);
  }
}

export default new MoviesServices();
