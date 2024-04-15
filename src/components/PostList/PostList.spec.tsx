import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { PostList } from ".";
jest.mock("../../hooks/useGetAllPosts", () => ({
  useGetAllPosts: jest.fn(),
}));

describe("Componente para listar as postagens", () => {
  it("Deve ser capaz de exibir uma lista de postagens", () => {
    const mockPosts = [
      {
        body: "cupiditate quo est a modi nesciunt soluta ipsa voluptas error itaque dicta in autem qui minus magnam et distinctio eum accusamus ratione error aut",
        id: 100,
        title: "at nam consequatur ea labore ea harum",
        userId: 10,
      },
    ];
    jest
      .spyOn(require("../../hooks/useGetAllPosts"), "useGetAllPosts")
      .mockReturnValue({ posts: mockPosts });

    render(<PostList />);

    expect(screen.getByText("Postagens")).toBeInTheDocument();
    expect(
      screen.getByText("at nam consequatur ea labore ea harum")
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Nenhuma postagen encontrada")
    ).not.toBeInTheDocument();
  });

  it("Deve ser capaz de exibir uma lista vazia", async () => {
    jest
      .spyOn(require("../../hooks/useGetAllPosts"), "useGetAllPosts")
      .mockReturnValue({ posts: [] });

    render(<PostList />);

    expect(screen.getByText("Postagens")).toBeInTheDocument();
    expect(screen.getByText("Nenhuma postagem encontrada")).toBeInTheDocument();
  });
});
