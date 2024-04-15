import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { getAllCategoriesApi } from "../../services/api/categoriesApi";

export const useGetAllCategories = () => {
  const [categories, setCategories] = useState<string[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAllCategories = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await getAllCategoriesApi();
      setCategories(response);
    } catch (error) {
      const _error = error as AxiosError;
      setError(_error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return {
    getAllCategories,
    categories,
    error,
    isLoading,
  };
};
