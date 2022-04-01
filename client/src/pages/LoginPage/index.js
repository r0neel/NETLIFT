import React from "react";
import Form from "../../components/Form";

const LoginPage = () => {
  const inputs = ["username", "password"];
  return (
    <div className=" bg-nl-darkblue h-screen container">
      <Form text="Login" inputs={inputs} />
    </div>
  );
};

export default LoginPage;
