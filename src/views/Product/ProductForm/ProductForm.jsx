import { Form, Input, InputNumber, Button, Col, Row, List } from "antd";
import { TitleLayout } from "../shared/TitleLayout";
import { Typography } from "antd";

const { Text } = Typography;

export const ProductForm = ({ updateProducts, products }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newProduct = { ...values, id: Date.now() };
    const updatedProducts = [...products, newProduct];
    updateProducts(updatedProducts);
    form.resetFields();
  };

  return (
    <>
      <TitleLayout title={"Formulario"} />
      <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
        <Col span={14}>
          <Form
            form={form}
            onFinish={onFinish}
            layout="vertical"
            style={{
              maxWidth: "500px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Form.Item
              label="Descripción"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Por favor, ingrese la descripción",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Cantidad"
              name="quantity"
              rules={[
                { required: true, message: "Por favor, ingrese la cantidad" },
              ]}
            >
              <InputNumber style={{ width: "100%" }} min={1} />
            </Form.Item>
            <Form.Item
              label="Precio"
              name="price"
              rules={[
                { required: true, message: "Por favor, ingrese el precio" },
              ]}
            >
              <InputNumber style={{ width: "100%" }} min={0.01} step={0.01} />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Agregar producto a la lista
              </Button>
            </Form.Item>
          </Form>
        </Col>
        <Col span={10}>
          <List
            size="small"
            header={<Text strong>LISTA DE PRODUCTOS</Text>}
            bordered
            dataSource={products}
            renderItem={(product) => (
              <List.Item>{product.description}</List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
