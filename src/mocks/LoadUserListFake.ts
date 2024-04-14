import { LoadUserList } from "../interfaces/LoadUserList";
import { HttpResponse } from "../interfaces/HttpResponse";
import { User } from "../interfaces/User";

export class LoadUserListFake implements LoadUserList {
  result: HttpResponse<User[]> = {
    statusCode: 200,
    body: [
      {
        id: 1,
        name: "Ygor Benjamim",
        email: "ygor@email.com",
      },
    ],
  };
  async loadAll() {
    return this.result;
  }
}
