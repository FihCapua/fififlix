export default class ApiError extends Error {
  response: any;

  body: any;

  constructor(response: any, body?: any) {
    super();

    this.name = "ApiError";
    this.response = response;
    this.body = body;
    this.message = body?.error || `${response.status} - ${response.statusText}`;
  }
}
