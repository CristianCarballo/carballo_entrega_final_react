import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Flex, Modal, Space } from "antd";

export const ModalDelete = ({ productId, products, updateProducts }) => {
  const [modal, contextHolder] = Modal.useModal();

  const handleDelete = () => {
    const newProducts = products.filter((product) => product.id !== productId);
    updateProducts(newProducts);
  };

  const handleClickConfirm = () => {
    modal.confirm({
      title: "¿Desea eliminar el producto de la lista?",
      icon: <ExclamationCircleOutlined />,
      content: "",
      okText: "Quiero eliminar este producto",
      cancelText: "Cancelar",
      onOk: () => handleDelete(),
    });
  };

  return (
    <Flex gap="small">
      <Space>
        <Button danger onClick={() => handleClickConfirm()}>
          Eliminar producto
        </Button>
      </Space>
      {contextHolder}
    </Flex>
  );
};
