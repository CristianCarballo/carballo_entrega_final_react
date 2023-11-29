import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button type="primary" size={"large"} onClick={() => navigate(-1)}>
      Volver
    </Button>
  );
};
