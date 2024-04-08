import { AxiosHttpClientAdapter } from "../../infra/adapters";
import { HttpClient } from "../../interfaces/HttpClient";

export function ImplementsPage() {
  const api = new AxiosHttpClientAdapter();

  const getUserList = async (api: HttpClient) => {
    const response = await api.request({
      url: "https://jsonplaceholder.typicode.com/users/",
      method: "get",
    });

    console.log("Response: ", response);
  };

  getUserList(api);

  return <h1>Implementações</h1>;
}
