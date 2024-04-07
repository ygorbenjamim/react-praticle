export interface HttpRequest {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body?: any;
  headers?: any;
}
