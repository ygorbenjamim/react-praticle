import axios from "axios";
import { Post } from "../../../interfaces/Post";

export const getAllPostsApi = async () => {
  const response = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
};
