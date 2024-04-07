import { HttpRequest } from "./HttpRequest";

export interface HttpClient<I = any> {
  request: (data: HttpRequest) => Promise<I>;
}
