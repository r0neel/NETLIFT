import React from "react";
import Form from "../../components/Form";
import logo from "../../static/imgs/logo.png";
import { NavLink as Link } from "react-router-dom";

const LoginPage = () => {
  const inputs = ["username", "password"];
  return (
    <div className="mx-auto bg-nl-darkblue min-h-screen container pt-16">
      <div className="space-y-20">
        <img
          className=" container object-cover h-28 w-80 rounded-full mx-auto"
          src={logo}
        />
        <Form text="Login" inputs={inputs} />
      </div>
      <Link to="/register" className="text-slate-50 mx-auto w-fit block mt-4">
        Don&apos;t have an account?
      </Link>
    </div>
  );
};

export default LoginPage;
