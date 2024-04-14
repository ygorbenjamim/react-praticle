import axios, { AxiosResponse } from "axios";
import { Product } from "../../../interfaces/Product";

export const getAllProductsApi = async () => {
  const response = await axios.get<unknown, AxiosResponse<Product[]>>(
    "https://fakestoreapi.com/products"
  );
  return response.data;
};
