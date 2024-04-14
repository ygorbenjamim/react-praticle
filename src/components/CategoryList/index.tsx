import { useGetAllCategories } from "../../hooks/useGetAllCategories";

export const CategoryList = () => {
  const { categories } = useGetAllCategories();

  return (
    <div>
      <p>Categorias</p>
      {!categories?.length ? (
        <p>Nenhuma categoria encontrada</p>
      ) : (
        categories.map((category) => (
          <div key={category}>
            <p>{category}</p>
          </div>
        ))
      )}
    </div>
  );
};
