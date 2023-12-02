import { Card, Typography, Checkbox } from "antd";
import { ModalDelete } from "../ProductForm/ModalDelete";

const { Text, Title } = Typography;

export const ProductCard = ({
  product,
  products,
  updateProducts,
  checkBoxOnChange,
  checkedItems,
}) => {
  return (
    <>
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
          <Checkbox onChange={() => checkBoxOnChange(product.id)}>
            Comprado
          </Checkbox>
        </div>
      </Card>
    </>
  );
};
