import { useCallback, useEffect, useState } from "react";
import { HttpResponse } from "../../interfaces/HttpResponse";
import { LoadUserList } from "../../interfaces/LoadUserList";
import { User } from "../../interfaces/User";

export function useUserList(loadUserList: LoadUserList<HttpResponse<User[]>>) {
  const [users, setUsers] = useState<User[]>();

  const getUserList = useCallback(async () => {
    const response = await loadUserList.loadAll();
    if (!response.body) return;
    setUsers(response.body);
  }, [loadUserList]);

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return {
    users,
  };
}
