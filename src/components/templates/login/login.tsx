import React, { useState } from "react";
import Typography from "../../atoms/typography/typography";
import PersonImage from "../../atoms/image-svg/person";
import Input from "../../atoms/input/input";
import Button from "../../atoms/button/button";

type LoginProps = {
  onClickSingIn: (userName: string, password: string) => void;
};

const Login: React.FC<LoginProps> = ({ onClickSingIn }) => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleOnClickSingIn = () => {
    onClickSingIn(userName, password);
  };
  return (
    <div className="bg-dark p-10 h-screen w-screen">
      <header className="flex flex-col justify-center items-center gap-8">
        <Typography
          label="Bienvenidos !"
          variant="title"
          color="text-white"
          family="bold"
          spacing="wider"
        />
        <Typography
          label="Vive una experiencia inolvidable.."
          variant="small"
          color="text-gray-300"
          spacing="wider"
          className="opacity-30"
        />
        <PersonImage />
      </header>

      <main className="flex flex-col items-center justify-center w-full mt-12 gap-8">
        <Input
          icon="person"
          placeholder="Usuario"
          inputClass="bg-transparent w-56 md:w-60 text-white"
          value={userName}
          onChange={setUserName}
        />
        <Input
          value={password}
          onChange={setPassword}
          placeholder="Password"
          inputClass="bg-transparent w-56 md:w-60 text-white"
        />
      </main>

      <footer className="flex flex-col items-center mt-10">
        <Button
          label="Sing in"
          theme="secondary"
          className="w-64"
          onClick={handleOnClickSingIn}
        />
        <section className="flex items-center justify-center gap-3 mt-5">
          <Typography
            variant="small"
            label="Aun no tienes una cuenta?"
            color="text-white"
            className="text-xs10"
            spacing="wide"
          />
          <Typography
            variant="small"
            label="Registrarse"
            color="text-danger-light"
            className="text-xs10"
            spacing="wider"
          />
        </section>
      </footer>
    </div>
  );
};

export default Login;
