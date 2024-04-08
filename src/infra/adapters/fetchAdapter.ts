import { HttpClient } from "../../interfaces/HttpClient";
import { HttpRequest } from "../../interfaces/HttpRequest";

export class FetchHttpClientAdapter implements HttpClient {
  async request(data: HttpRequest) {
    let fetchResponse: Response;
    let response: Response;
    try {
      response = await fetch(data.url, {
        method: data.method,
        body: data.body,
        headers: data.headers,
      });
      fetchResponse = await response.json();
    } catch (error) {
      const _error = error as Error;
      throw new Error(_error.message);
    }

    return {
      statusCode: response.status,
      body: fetchResponse,
    };
  }
}
