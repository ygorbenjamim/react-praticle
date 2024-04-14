import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import { UserList } from ".";
import { LoadUserListFake } from "../../mocks/LoadUserListFake";

describe("Componente de lista de usuário", () => {
  it("Deve ser capaz de renderizar", async () => {
    const loadUserList = new LoadUserListFake();
    render(<UserList loadUserList={loadUserList} />);

    await waitFor(() => {
      expect(screen.getByText("Ygor Benjamim")).toBeVisible();
    });
  });
});
