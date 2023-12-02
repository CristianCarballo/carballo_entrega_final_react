import { Typography } from "antd";

export const TitleLayout = ({ title }) => {
  const { Title } = Typography;
  return <Title style={{ textAlign: "center" }}>{title}</Title>;
};
