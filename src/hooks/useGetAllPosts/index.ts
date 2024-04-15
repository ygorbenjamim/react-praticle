import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Post } from "../../interfaces/Post";
import { getAllPostsApi } from "../../services/api/PostsApi";

export const useGetAllPosts = () => {
  const [posts, setPosts] = useState<Post[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getAllPosts = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await getAllPostsApi();
      setPosts(response);
    } catch (error) {
      const _error = error as AxiosError;
      setError(_error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return {
    getAllPosts,
    posts,
    error,
    isLoading,
  };
};
