import { renderHook, waitFor } from "@testing-library/react";
import { LoadUserListFake } from "../../mocks/LoadUserListFake";
import { useUserList } from ".";

describe("Hook useUserList", () => {
  it("Deve ser capaz de retornar uma lista de usuários", async () => {
    const { result } = renderHook(() => useUserList(new LoadUserListFake()));

    await waitFor(() => {
      // toMatchObject compara a serialização, por exemplo [] == []
      expect(result.current.users).toMatchObject([
        {
          id: 1,
          name: "Ygor Benjamim",
          email: "ygor@email.com",
        },
      ]);
    });
  });

  it("Deve ser capaz de tratar um erro do servidor", async () => {
    const loadUserList = new LoadUserListFake();
    loadUserList.result = {
      body: {
        message: "Não foi possível buscar os usuários",
      },
      statusCode: 500,
    };
    const { result } = renderHook(() => useUserList(loadUserList));

    await waitFor(() => {
      expect(result.current.users).toBe(undefined);
    });
  });

  it("Deve ser capaz de tratar sem resultados", async () => {
    const loadUserList = new LoadUserListFake();
    loadUserList.result = {
      body: [],
      statusCode: 204,
    };
    const { result } = renderHook(() => useUserList(loadUserList));

    await waitFor(() => {
      expect(result.current.users).toMatchObject([]);
    });
  });
});
