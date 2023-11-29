import { useState } from "react";
import {
  ArrowRightOutlined,
  ArrowLeftOutlined,
  EyeOutlined,
  UnorderedListOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import { RoutesContent } from "./RoutesContent";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "90vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UnorderedListOutlined />}>
            <Link to="/list">Lista de compras</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PlusCircleOutlined />}>
            <Link to="/form">Agregar producto</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<EyeOutlined />}>
            <Link to="/detail">Ver producto</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <ArrowRightOutlined /> : <ArrowLeftOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <RoutesContent />
        </Content>
      </Layout>
    </Layout>
  );
};
