import ApiError from "../../error/ApiError";

class HttpCLient {
  baseUrl: string;

  static get: any;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get(path: string) {
    const response = await fetch(`${this.baseUrl}${path}`);

    let body = null;
    const contentType = response.headers.get("Content-Type");

    if (contentType?.includes("application/json")) {
      body = await response.json();
    }

    if (response.ok) {
      return body;
    }

    throw new ApiError(response, body);
  }
}

export default HttpCLient;
