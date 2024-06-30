import ApiError from "../../error/ApiError";

class HttpCLient {
  baseUrl: string;

  static get: any;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get(path: string) {
    return this.makeRequest(path, { method: "GET" });
  }

  post(path: string, body: any) {
    return this.makeRequest(path, { method: "POST", body });
  }

  async makeRequest(path: string, options: any = {}) {
    const headers = new Headers();
    if (options.body) {
      headers.append("Content-Type", "application/json");
    }

    const response = await fetch(`${this.baseUrl}${path}`, {
      method: options.method,
      body: JSON.stringify(options.body),
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
