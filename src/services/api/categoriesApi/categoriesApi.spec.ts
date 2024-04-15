import axios from "axios";
import { getAllCategoriesApi } from ".";
jest.mock("axios");

describe("Serviço para buscar as categorias", () => {
  it("Deve ser capaz de retornar uma lista de categorias", async () => {
    const mockCategories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];
    axios.get = jest.fn().mockResolvedValue({ data: mockCategories });
    const categories = await getAllCategoriesApi();
    expect(axios.get).toHaveBeenCalledWith(
      "https://fakestoreapi.com/products/categories"
    );
    expect(categories).toEqual(mockCategories);
  });
});
