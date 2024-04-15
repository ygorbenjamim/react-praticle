import { renderHook, waitFor } from "@testing-library/react";
import { AxiosError } from "axios";
import { useGetAllCategories } from ".";
import { getAllCategoriesApi } from "../../services/api/categoriesApi";

jest.mock("../../services/api/categoriesApi");

describe("Hook para buscar todas as categorias", () => {
  it("Deve ser capaz de retornar os valores iniciais", async () => {
    const mockCategories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];
    (getAllCategoriesApi as jest.Mock).mockResolvedValue(mockCategories);
    const { result } = renderHook(() => useGetAllCategories());

    await waitFor(() => {
      expect(result.current.categories).toEqual(undefined);
      expect(result.current.isLoading).toEqual(true);
      expect(result.current.error).toEqual("");
    });
  });

  it("Deve ser capaz de retornar uma lista de categorias", async () => {
    const mockCategories = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing",
    ];
    (getAllCategoriesApi as jest.Mock).mockResolvedValue(mockCategories);
    const { result } = renderHook(() => useGetAllCategories());

    await waitFor(() => {
      expect(result.current.categories).toEqual(mockCategories);
      expect(result.current.error).toEqual("");
    });
  });

  it("Deve ser capaz de tratar um erro", async () => {
    const mockError = new AxiosError("Erro interno", "500");
    (getAllCategoriesApi as jest.Mock).mockRejectedValue(mockError);
    const { result } = renderHook(() => useGetAllCategories());

    await waitFor(() => {
      expect(result.current.categories).toEqual(undefined);
      expect(result.current.isLoading).toEqual(false);
      expect(result.current.error).toEqual(mockError.message);
    });
  });

  it("Deve ser capaz de tratar uma lista vazia", async () => {
    const mockCategories: string[] = [];
    (getAllCategoriesApi as jest.Mock).mockResolvedValue(mockCategories);
    const { result } = renderHook(() => useGetAllCategories());

    await waitFor(() => {
      expect(result.current.categories).toEqual(mockCategories);
      expect(result.current.isLoading).toEqual(false);
      expect(result.current.error).toEqual("");
    });
  });
});
