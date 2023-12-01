import { Route, Routes } from "react-router-dom";
import { ProductList } from "./Product/ProductList/ProductList";
import { ProductForm } from "./Product/ProductForm/ProductForm";
import { ProductDetail } from "./Product/ProductDetail/ProductDetail";
import { PageNotFound } from "./Product/PageNotFound";

export const RoutesContent = ({ getStoredProducts }) => {
  return (
    <Routes>
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/" element={<ProductList />} />
      <Route
        path="/list"
        element={<ProductList getStoredProducts={getStoredProducts} />}
      />
      <Route
        path="/form"
        element={<ProductForm getStoredProducts={getStoredProducts} />}
      />
      <Route path="/detail" element={<ProductDetail />} />
    </Routes>
  );
};
