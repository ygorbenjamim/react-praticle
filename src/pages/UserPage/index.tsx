import { UserList } from "../../components/UserList";
import { AxiosHttpClientAdapte } from "../../infra/adapters";
import { HttpClient } from "../../interfaces/HttpClient";

export function UserPage() {
  const getUserList = (httpClient: HttpClient) => {
    const loadAll = async () => {
      return await httpClient.request({
        url: "https://jsonplaceholder.typicode.com/users/",
        method: "get",
      });
    };

    return {
      loadAll,
    };
  };

  return <UserList loadUserList={getUserList(new AxiosHttpClientAdapte())} />;
}
