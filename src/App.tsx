import { useGetAllProducts } from "./hooks/useGetAllProducts";
//import { ImplementsPage } from "./pages/ImplementsPage";
import { ProductPage } from "./pages/ProductPage";

function App() {
  useGetAllProducts();
  return <ProductPage />;
}

export default App;
