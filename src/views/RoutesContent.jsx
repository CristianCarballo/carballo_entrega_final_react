import { Route, Routes } from "react-router-dom";
import { ProductList } from "./Product/ProductList/ProductList";
import { ProductForm } from "./Product/ProductForm/ProductForm";
import { PageNotFound } from "./Product/shared/PageNotFound";

export const RoutesContent = ({ updateProducts, products }) => {
  return (
    <Routes>
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/" element={<ProductList />} />
      <Route
        path="/list"
        element={
          <ProductList updateProducts={updateProducts} products={products} />
        }
      />
      <Route
        path="/form"
        element={
          <ProductForm updateProducts={updateProducts} products={products} />
        }
      />
    </Routes>
  );
};
