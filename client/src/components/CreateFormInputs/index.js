import React from "react";
import PropTypes from "prop-types";

const CreateFormInputs = ({ label }) => {
  // This changes the input type based on the field
  let type = "text";
 
  return (
    <div className="bg-slate-50 relative rounded-xl p-5">
      {label.text === "title" ? (
        <input
          className="bg-transparent relative z-10 block w-full appearance-none focus:outline-none text-xl peer"
          type={type}
          name={label.text}
          placeholder=" "
          required
        />
      ) : (
        <datalist
          className="bg-transparent relative z-10 block w-full appearance-none focus:outline-none text-xl peer"
          type={type}
          name={label.text}
          placeholder=" "
          required
        />
      )}
      {label.text === "weight" ? (
        <>
          <select>
            <option>kg</option>
            <option>lbs</option>
          </select>
        </>
      ) : null }
      <label
        className="registration_form duration-300 capitalize origin-0 absolute top-5 text-nl-darkblue text-xl  peer-focus-within:text-nl-navblue peer-focus-within:transform peer-focus-within:scale-75 peer-focus-within:-translate-y-6 peer-focus-within:font-bold"
        htmlFor={label.text}
      >
        {label.text}:
      </label>
      <p className="registration_message hidden peer-invalid:block text-xs font-thin peer-focus-within:text-red-500 peer-focus-within:font-normal">
        {label.message}
      </p>
    </div>
  );
};

CreateFormInputs.propTypes = {
  label: PropTypes.object.isRequired,
};

export default CreateFormInputs;
