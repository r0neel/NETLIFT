import React from "react";
const FormInputs = ({ label }) => {
  return (
    <div className="bg-slate-50 relative rounded-xl p-5">
      <input
        className="bg-transparent z-10 block w-full appearance-none focus:outline-none text-xl"
        type="text"
        name={label}
        placeholder=" "
      />
      <label
        className=" origin-0 absolute top-5 text-nl-darkblue text-xl"
        htmlFor={label}
      >
        {label}:
      </label>
    </div>
  );
};

export default FormInputs;
