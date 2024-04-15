import { useGetAllPosts } from "../../hooks/useGetAllPosts";

export const PostList = () => {
  const { posts } = useGetAllPosts();

  return (
    <div>
      <p>Postagens</p>
      {!posts?.length ? (
        <p>Nenhuma postagem encontrada</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};
