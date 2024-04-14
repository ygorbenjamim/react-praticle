import { useCallback, useEffect, useState } from "react";
import { LoadUserList } from "../../interfaces/LoadUserList";
import { User } from "../../interfaces/User";

export function useUserList(loadUserList: LoadUserList) {
  const [users, setUsers] = useState<User[]>();

  const getUserList = useCallback(async () => {
    const response = await loadUserList.loadAll();
    if (response.statusCode !== 200 && response.statusCode !== 204) return;
    setUsers(response.body as User[]);
  }, [loadUserList]);

  useEffect(() => {
    getUserList();
  }, [getUserList]);

  return {
    users,
  };
}
