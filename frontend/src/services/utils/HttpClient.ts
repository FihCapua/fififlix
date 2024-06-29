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

  async post(path: string, body: any) {
    const headers = new Headers({
      "Content-Type": "application/json",
    });

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers,
    });

    let responseBody = null;
    const contentType = response.headers.get("Content-Type");

    if (contentType?.includes("application/json")) {
      responseBody = await response.json();
    }

    if (response.ok) {
      return responseBody;
    }

    throw new ApiError(response, responseBody);
  }
}

export default HttpCLient;
