import { act, renderHook, waitFor } from "@testing-library/react";
import { useGetAllProducts } from ".";
import { getAllProductsApi } from "../../services/api/productsApi";
import { AxiosError } from "axios";
//import { getAllProductsApi } from "../../services/api/productsApi";

jest.mock("../../services/api/productsApi");

describe("Hook para buscar os produtos", () => {
  it("Deve ser capaz de obter os valores iniciais", async () => {
    const mockProducts = [
      {
        id: 1,
        title: "Teste",
      },
    ];
    (getAllProductsApi as jest.Mock).mockResolvedValue(mockProducts);
    const { result } = renderHook(() => useGetAllProducts());
    expect(result.current.isLoading).toEqual(true);

    await waitFor(() => {
      expect(result.current.products).toEqual(mockProducts);
      expect(result.current.error).toEqual("");
      // Espero que seja true por conta do useEffect que altera o valor imediatamente
      expect(result.current.isLoading).toEqual(false);
    });
  });

  it("Deve ser capaz de exibir uma lista de produtos", async () => {
    (getAllProductsApi as jest.Mock).mockResolvedValue([
      {
        id: 1,
        title: "title",
      },
    ]);
    const { result } = renderHook(() => useGetAllProducts());

    await waitFor(() => {
      expect(result.current.products).toEqual([
        {
          id: 1,
          title: "title",
        },
      ]);
    });
  });

  it("Deve ser capaz de tratar uma lista vazia", async () => {
    (getAllProductsApi as jest.Mock).mockResolvedValue([]);
    const { result } = renderHook(() => useGetAllProducts());

    await waitFor(() => {
      expect(result.current.products).toMatchObject([]);
    });
  });

  it("Deve ser capaz de tratar um erro no servidor", async () => {
    (getAllProductsApi as jest.Mock).mockRejectedValue(
      new AxiosError("Erro interno", "500")
    );
    const { result } = renderHook(() => useGetAllProducts());

    await waitFor(() => {
      expect(result.current.error).toEqual("Erro interno");
    });
  });

  it("Deve ser capaz de alterar a autorização", async () => {
    const mockProducts = [
      {
        id: 1,
        title: "Title",
      },
    ];
    (getAllProductsApi as jest.Mock).mockResolvedValue(mockProducts);
    const { result } = renderHook(() => useGetAllProducts());

    waitFor(() => {
      expect(result.current.available).toEqual(false);

      // Sempre envolva as chamadas de funções em uma act
      act(() => {
        result.current.toggleAvailable();
      });

      expect(result.current.available).toEqual(true);
    });
  });
});
