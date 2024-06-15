import HttpClient from "./utils/HttpClient";

// Singleton
class MoviesServices {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient("http://localhost:3000");
  }

  async listMovies(orderBy: string = "asc") {
    return this.httpClient.get(`/moviess?orderBy=${orderBy}`);
  }
}

export default new MoviesServices();
