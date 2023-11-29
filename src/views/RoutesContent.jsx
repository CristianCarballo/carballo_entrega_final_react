import { Route, Routes } from "react-router-dom";
import { ProductList } from "./Product/ProductList/ProductList";
import { ProductForm } from "./Product/ProductForm/ProductForm";
import { ProductDetail } from "./Product/ProductDetail/ProductDetail";
import { PageNotFound } from "./Product/PageNotFound";

export const RoutesContent = () => {
  return (
    <Routes>
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/" element={<ProductList />} />
      <Route path="/list" element={<ProductList />} />
      <Route path="/form" element={<ProductForm />} />
      <Route path="/detail" element={<ProductDetail />} />
    </Routes>
  );
};
