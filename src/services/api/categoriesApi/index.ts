import axios, { AxiosResponse } from "axios";

export const getAllCategoriesApi = async () => {
  const response = await axios.get<unknown, AxiosResponse<string[]>>(
    "https://fakestoreapi.com/products/categories"
  );

  return response.data;
};
