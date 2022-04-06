import React from "react";
import Form from "../../../components/Form";

const SettingsUsername = () => {
  const inputs = [
    {
      text: "username",
      message: "Must be between five and twenty characters",
      pattern: ".{5,20}",
    },
  ];

  const change = (e) => {
    // TODO submit data to server and add error handling
    e.preventDefault();
  };
  return (
    <div className="pt-8">
      <Form text="Change" inputs={inputs} handleSubmit={change} />
    </div>
  );
};

export default SettingsUsername;
