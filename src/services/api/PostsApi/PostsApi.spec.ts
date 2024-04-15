import axios, { AxiosError } from "axios";
import { getAllPostsApi } from ".";
jest.mock("axios");

describe("Serviço que busca todos as postagens", () => {
  it("Deve ser capaz de retornar uma lista de postagens", async () => {
    const mockPosts = [
      {
        body: "cupiditate quo est a modi nesciunt soluta ipsa voluptas error itaque dicta in autem qui minus magnam et distinctio eum accusamus ratione error aut",
        id: 100,
        title: "at nam consequatur ea labore ea harum",
        userId: 10,
      },
    ];
    axios.get = jest.fn().mockResolvedValue({ data: mockPosts });
    const posts = await getAllPostsApi();

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts"
    );

    expect(posts).toEqual(mockPosts);
  });

  it("Deve ser capaz de tratar um erro", async () => {
    const mockError = new AxiosError("Erro interno", "500");
    axios.get = jest.fn().mockResolvedValue({ data: mockError });
    const posts = await getAllPostsApi();

    expect(posts).toEqual(mockError);
  });
});
