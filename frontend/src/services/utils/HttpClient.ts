class HttpCLient {
  baseUrl: string;

  static get: any;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseUrl}${path}`);

    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} - ${response.statusText}`);
  }
}

export default HttpCLient;
