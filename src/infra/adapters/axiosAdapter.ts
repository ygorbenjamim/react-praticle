import axios, { AxiosError, AxiosResponse } from "axios";
import { HttpClient } from "../../interfaces/HttpClient";
import { HttpRequest } from "../../interfaces/HttpRequest";

export class AxiosHttpClientAdapte implements HttpClient {
  async request(data: HttpRequest) {
    let axiosResponse: AxiosResponse;
    try {
      axiosResponse = await axios.request({
        url: data.url,
        method: data.method,
        data: data?.body,
      });
    } catch (error) {
      const _error = error as AxiosError<{ message: string }>;
      throw new Error(_error?.response?.data?.message);
    }

    return {
      statusCode: axiosResponse.status,
      body: axiosResponse?.data,
    };
  }
}
