interface HttpErrorBody {
  message: string;
}

export interface HttpResponse<I = any> {
  statusCode: number;
  body?: I | HttpErrorBody;
}
