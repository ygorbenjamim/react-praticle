import { AxiosHttpClientAdapter } from "../../infra/adapters";
import { HttpClient } from "../../interfaces/HttpClient";

export function ImplementsPage() {
  const api = new AxiosHttpClientAdapter();

  const getUserList = async (api: HttpClient) => {
    try {
      const response = await api.request({
        url: "https://jsonplaceholder.typicode.com/users/",
        method: "get",
      });

      console.log("Response: ", response);
      //throw new Error("Ai");
    } catch (error) {
      const _error = error as Error;
      console.log("Error: ", _error.message);
    }
  };

  getUserList(api);

  return <h1>Implementações</h1>;
}
