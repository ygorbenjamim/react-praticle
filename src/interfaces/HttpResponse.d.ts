export interface HttpResponse<I = any> {
  statusCode: number;
  body?: I;
}
