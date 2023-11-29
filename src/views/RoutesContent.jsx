import { Route, Routes } from "react-router-dom";
import { App } from "./App";
import { ProductForm } from "./Product/ProductForm/ProductForm";
import { ProductDetail } from "./Product/ProductDetail/ProductDetail";
import { ProductList } from "./Product/ProductList/ProductList";

export const RoutesContent = () => {
  return (
    <Routes>
      <Route path="/*" component={<App />} />
      <Route path="/form" component={<ProductForm />} />
      <Route path="/detail" component={<ProductDetail />} />
      <Route path="/list" component={<ProductList />} />
    </Routes>
  );
};
