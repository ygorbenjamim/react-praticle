import axios from "axios";
import { getAllProductsApi } from ".";
jest.mock("axios");

describe("Serviço para buscar produtos", () => {
  it("Deve ser capaz de retornar todos os produtos", async () => {
    const mockResponse = {
      data: {
        results: [{ name: "Foo" }],
      },
    };

    axios.get = jest.fn().mockResolvedValue(mockResponse);
    const products = await getAllProductsApi();

    expect(axios.get).toHaveBeenCalledWith("https://fakestoreapi.com/products");
    expect(mockResponse.data).toEqual(products);
  });
});
