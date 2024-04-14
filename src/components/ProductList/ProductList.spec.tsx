import { render, screen } from "@testing-library/react";
import { ProductList } from ".";
import "@testing-library/jest-dom";

jest.mock("../../hooks/useGetAllProducts", () => ({
  useGetAllProducts: jest.fn(),
}));

describe("Componente de lista de produtos", () => {
  it("Deve ser capaz de renderizar o título", () => {
    const mockProducts: any[] = [];

    jest
      .spyOn(require("../../hooks/useGetAllProducts"), "useGetAllProducts")
      .mockReturnValue({
        products: mockProducts,
      });

    render(<ProductList />);

    expect(screen.getByText("Produtos")).toBeInTheDocument();
    expect(screen.getByText("Nenhum produto encontrado")).toBeInTheDocument();
  });

  it("Deve ser capaz de renderizar uma lista de produtos", async () => {
    const mockProducts = [
      {
        id: 1,
        title: "Title 1",
        category: "Category 1",
        description: "Description 1",
        price: 10.99,
      },
      {
        id: 2,
        title: "Title 2",
        category: "Category 2",
        description: "Description 2",
        price: 20.99,
      },
    ];

    // Mock do retorno de useGetAllProducts
    jest
      .spyOn(require("../../hooks/useGetAllProducts"), "useGetAllProducts")
      .mockReturnValue({
        products: mockProducts,
      });

    render(<ProductList />);

    expect(screen.getByText("Produtos")).toBeInTheDocument();

    // Verifica se cada produto é renderizado corretamente
    mockProducts.forEach((product) => {
      expect(screen.getByText(`Título: ${product.title}`)).toBeInTheDocument();
      expect(
        screen.getByText(`Categoria: ${product.category}`)
      ).toBeInTheDocument();
      expect(
        screen.getByText(`Descrição: ${product.description}`)
      ).toBeInTheDocument();
      expect(screen.getByText(`Preço: ${product.price}`)).toBeInTheDocument();
    });
  });

  it("Deve renderizar uma mensagem quando não há produtos", () => {
    // Mock do retorno de useGetAllProducts sem produtos
    jest
      .spyOn(require("../../hooks/useGetAllProducts"), "useGetAllProducts")
      .mockReturnValue({
        products: [],
      });

    render(<ProductList />);

    // Verifica se a mensagem de nenhum produto encontrado é renderizada
    expect(screen.getByText("Nenhum produto encontrado")).toBeInTheDocument();
  });
});
