import { useState } from "react";
import { TitleLayout } from "../TitleLayout";
import { Card, List, Typography, Checkbox } from "antd";
import { productList } from "../data";

const { Text, Title } = Typography;

export const ProductList = () => {
  const [checkedItems, setCheckedItems] = useState([]);

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

  return (
    <>
      <TitleLayout title={"Lista de Productos"} />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={productList}
        renderItem={(product) => (
          <List.Item>
            <Card
              title={
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
