import React from "react";
import Form from "../../components/Form";
import logo from "../../static/imgs/logo.png";

const LoginPage = () => {
  const inputs = ["username", "password"];
  return (
    <div className=" bg-nl-darkblue h-screen container pt-16 space-y-20">
      <img
        className=" container object-cover h-28 w-80 rounded-full mx-auto"
        src={logo}
      />
      <Form text="Login" inputs={inputs} />
    </div>
  );
};

export default LoginPage;
