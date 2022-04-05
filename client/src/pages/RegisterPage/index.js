import React from "react";
import Form from "../../components/Form";
import logo from "../../static/imgs/logo.png";
import { NavLink as Link } from "react-router-dom";

const RegisterPage = () => {
  const inputs = ["email", "username", "password", "confirm password"];
  return (
    <div className="mx-auto bg-nl-darkblue min-h-screen container pt-16">
      <div className="space-y-20">
        <img
          className=" container object-cover h-28 w-80 rounded-full mx-auto"
          src={logo}
        />
        <Form text="Register" inputs={inputs} />
      </div>
      <Link to="/login" className="text-slate-50 mx-auto w-fit block mt-4">
        Already registered?
      </Link>
    </div>
  );
};

export default RegisterPage;
