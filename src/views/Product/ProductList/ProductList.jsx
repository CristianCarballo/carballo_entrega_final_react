import { useState } from "react";
import { TitleLayout } from "../shared/TitleLayout";
import { List } from "antd";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductList = ({ updateProducts, products }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const checkBoxOnChange = (productId) => {
    const updatedItems = [...checkedItems];
    const index = updatedItems.indexOf(productId);

    if (index === -1) updatedItems.push(productId);
    else updatedItems.splice(index, 1);

    setCheckedItems(updatedItems);
  };

  return (
    <>
      <TitleLayout title={"Lista de Productos"} />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 3,
          xxl: 4,
        }}
        dataSource={products}
        renderItem={(product) => (
          <List.Item>
            <ProductCard
              product={product}
              products={products}
              updateProducts={updateProducts}
              checkBoxOnChange={checkBoxOnChange}
              checkedItems={checkedItems}
            />
          </List.Item>
        )}
      />
    </>
  );
};
