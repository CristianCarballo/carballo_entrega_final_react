import { useState, useEffect } from "react";
import { TitleLayout } from "../TitleLayout";
import { Card, List, Typography, Checkbox } from "antd";
import { productList } from "../data";
import { ModalDelete } from "../ModalDelete";

const { Text, Title } = Typography;

export const ProductList = ({ getStoredProducts }) => {
  const [checkedItems, setCheckedItems] = useState([]);
  const [products, setProducts] = useState(productList);

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  const CheckBoxOnChange = (productId) => {
    const updatedItems = [...checkedItems];
    const index = updatedItems.indexOf(productId);

    if (index === -1) {
      updatedItems.push(productId);
    } else {
      updatedItems.splice(index, 1);
    }

    setCheckedItems(updatedItems);
  };

  useEffect(() => {
    const storedProducts = getStoredProducts();
    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
      updateProducts(storedProducts);
    }
  }, []);

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
            <Card
              title={
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Title
                    level={4}
                    type={checkedItems.includes(product.id) && "success"}
                    style={
                      checkedItems.includes(product.id)
                        ? { textDecoration: "line-through" }
                        : {}
                    }
                  >
                    {product.description}
                  </Title>
                  <ModalDelete
                    productId={product.id}
                    products={products}
                    updateProducts={updateProducts}
                  />
                </div>
              }
            >
              <div>
                <Text
                  strong
                  type={checkedItems.includes(product.id) && "success"}
                  style={
                    checkedItems.includes(product.id)
                      ? { textDecoration: "line-through" }
                      : {}
                  }
                >
                  Cantidad: {product.quantity}
                </Text>
              </div>
              <div>
                <Text
                  strong
                  type={checkedItems.includes(product.id) && "success"}
                  style={
                    checkedItems.includes(product.id)
                      ? { textDecoration: "line-through" }
                      : {}
                  }
                >
                  Precio: {product.price}
                </Text>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <Checkbox onChange={() => CheckBoxOnChange(product.id)}>
                  Comprado
                </Checkbox>
              </div>
            </Card>
          </List.Item>
        )}
      />
    </>
  );
};
