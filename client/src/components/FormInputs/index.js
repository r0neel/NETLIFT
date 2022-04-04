import React from "react";
const FormInputs = ({ label }) => {
  let type = "text";
  if (/password/i.test(label)) type = "password";
  return (
    <div className="bg-slate-50 relative rounded-xl p-5">
      <input
        className="bg-transparent relative z-10 block w-full appearance-none focus:outline-none text-xl"
        type={type}
        name={label}
        placeholder=" "
      />
      <label
        className=" duration-300 capitalize origin-0 absolute top-5 text-nl-darkblue text-xl"
        htmlFor={label}
      >
        {label}:
      </label>
    </div>
  );
};

export default FormInputs;
