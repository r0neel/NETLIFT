import React from "react";
import PropTypes from "prop-types";

const FormInputs = ({ label }) => {
  let type = "text";
  if (/password/i.test(label.text)) type = "password";
  if (/email/i.test(label.text)) type = "email";

  return (
    <div className="bg-slate-50 relative rounded-xl p-5">
      <input
        className="bg-transparent relative z-10 block w-full appearance-none focus:outline-none text-xl peer"
        type={type}
        name={label.text}
        placeholder=" "
        required
      />
      <label
        className=" duration-300 capitalize origin-0 absolute top-5 text-nl-darkblue text-xl"
        htmlFor={label.text}
      >
        {label.text}:
      </label>
      <p className="hidden peer-invalid:block text-tpink text-xs font-thin">
        {label.message}
      </p>
    </div>
  );
};

FormInputs.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormInputs;
