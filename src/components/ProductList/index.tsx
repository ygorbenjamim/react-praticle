import { useGetAllProducts } from "../../hooks/useGetAllProducts";

export const ProductList = () => {
  const { products } = useGetAllProducts();

  return (
    <div>
      <h2>Produtos</h2>
      {!products?.length ? (
        <div>Nenhum produto encontrado</div>
      ) : (
        products?.map((product) => (
          <div key={product.id}>
            <p>Título: {product.title}</p>
            <p>Categoria: {product.category}</p>
            <p>Descrição: {product.description}</p>
            <p>Preço: {product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};
