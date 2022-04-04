import React from "react";
import PropTypes from "prop-types";

const FormBtn = ({ text }) => {
  return (
    <button className=" bg-nl-lightblue text-nl-darkblue text-2xl font-medium py-4 px-16 rounded-xl mx-auto">
      {text}
    </button>
  );
};

FormBtn.propTypes = {
  text: PropTypes.string.isRequired,
};

export default FormBtn;
