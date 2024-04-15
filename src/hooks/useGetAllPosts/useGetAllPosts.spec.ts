import { renderHook, waitFor } from "@testing-library/react";
import { AxiosError } from "axios";
import { useGetAllPosts } from ".";
import { getAllPostsApi } from "../../services/api/PostsApi";
jest.mock("../../services/api/PostsApi");

describe("Hook para buscar todas as postagens", () => {
  it("Deve ser capaz de renderizar os valores iniciais", async () => {
    (getAllPostsApi as jest.Mock).mockResolvedValue([]);
    const { result } = renderHook(() => useGetAllPosts());
    await waitFor(() => {
      expect(result.current.error).toEqual("");
      expect(result.current.isLoading).toEqual(true);
      expect(result.current.posts).toEqual(undefined);
    });
  });

  it("Deve ser capaz de retornar uma lista de postagens", async () => {
    const mockPosts = [
      {
        body: "cupiditate quo est a modi nesciunt soluta ipsa voluptas error itaque dicta in autem qui minus magnam et distinctio eum accusamus ratione error aut",
        id: 100,
        title: "at nam consequatur ea labore ea harum",
        userId: 10,
      },
    ];
    (getAllPostsApi as jest.Mock).mockResolvedValue(mockPosts);
    const { result } = renderHook(() => useGetAllPosts());

    await waitFor(() => {
      expect(result.current.posts).toEqual(mockPosts);
      expect(result.current.error).toEqual("");
    });
  });

  it("Deve ser capaz de tratar um erro", async () => {
    const mockPosts = new AxiosError("Erro interno", "500");
    (getAllPostsApi as jest.Mock).mockRejectedValue(mockPosts);
    const { result } = renderHook(() => useGetAllPosts());

    await waitFor(() => {
      expect(result.current.posts).toEqual(undefined);
      expect(result.current.error).toEqual(mockPosts.message);
    });
  });
});
