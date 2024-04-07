import { useUserList } from "../../hooks/useUserList";
import { UserListProps } from "./UserListProps";

export function UserList({ loadUserList }: UserListProps) {
  const { users } = useUserList(loadUserList);
  return (
    <div>
      <h1>users</h1>
      {!users?.length && <p>No users</p>}
      {users?.length &&
        users.map((user) => {
          return (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.email}</p>
            </div>
          );
        })}
    </div>
  );
}
