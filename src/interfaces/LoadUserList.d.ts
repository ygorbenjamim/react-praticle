import { HttpResponse } from "./HttpResponse";
import { User } from "./User";

export interface LoadUserList {
  loadAll: () => Promise<HttpResponse<User[]>>;
}
