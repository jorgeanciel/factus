import React from "react";
import Login from "../components/templates/login/login";
import { useNavigate } from "react-router-dom";

const SingInContainer: React.FC = () => {
  const navigate = useNavigate();
  const handleLogIn = (userName: string, password: string) => {
    navigate("/home");
  };
  return (
    <div>
      <Login onClickSingIn={handleLogIn} />
    </div>
  );
};

export default SingInContainer;
