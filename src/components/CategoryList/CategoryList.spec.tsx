import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CategoryList } from ".";

jest.mock("../../hooks/useGetAllCategories", () => ({
  useGetAllCategories: jest.fn(),
}));

describe("Componente para listar categorias", () => {
  it("Deve ser capaz de renderizar o título", () => {
    const mockCategories: string[] = [];
    jest
      .spyOn(require("../../hooks/useGetAllCategories"), "useGetAllCategories")
      .mockReturnValue({
        categories: mockCategories,
      });
    render(<CategoryList />);

    expect(screen.getByText("Categorias")).toBeInTheDocument();
    expect(
      screen.queryByText("Nenhuma categoria encontrada")
    ).toBeInTheDocument();
  });

  it("Deve ser capaz de renderizar uma lista de categorias", () => {
    const mockCategories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];

    jest
      .spyOn(require("../../hooks/useGetAllCategories"), "useGetAllCategories")
      .mockReturnValue({
        categories: mockCategories,
      });

    render(<CategoryList />);

    mockCategories.map((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
    expect(
      screen.queryByText("Nenhuma categoria encontrada")
    ).not.toBeInTheDocument();
  });

  it("Deve ser capaz de renderizar uma lista vazia", () => {
    const mockCategories: string[] = [];

    jest
      .spyOn(require("../../hooks/useGetAllCategories"), "useGetAllCategories")
      .mockReturnValue({
        categories: mockCategories,
      });

    render(<CategoryList />);

    expect(
      screen.getByText("Nenhuma categoria encontrada")
    ).toBeInTheDocument();
  });
});
