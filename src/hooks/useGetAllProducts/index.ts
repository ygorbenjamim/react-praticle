import { useEffect, useState } from "react";
import { Product } from "../../interfaces/Product";
import { getAllProductsApi } from "../../services/api/productsApi";
import { AxiosError } from "axios";

export const useGetAllProducts = () => {
  const [products, setProducts] = useState<Product[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [available, setAvailable] = useState(false);

  const getAllProducts = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await getAllProductsApi();
      setProducts(response);
    } catch (error) {
      const _error = error as AxiosError;
      setError(_error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAvailable = () => {
    setAvailable((available) => !available);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return {
    getAllProducts,
    toggleAvailable,
    available,
    products,
    isLoading,
    error,
  };
};
