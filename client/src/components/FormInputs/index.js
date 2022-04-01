import React from "react";

const FormInputs = ({ label }) => {
  return (
    <div>
      <input type="text" name={label} placeholder=" " />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default FormInputs;
