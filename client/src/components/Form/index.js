import React from "react";
import FormBtn from "../FormBtn";
import FormInputs from "../FormInputs";
import PropTypes from "prop-types";

const Form = (props) => {
  const { text, inputs } = props;
  return (
    <form className="flex flex-col space-y-8 m-10">
      {inputs.map((input) => (
        <FormInputs key={`${input.text}_input`} label={input} />
      ))}
      <FormBtn text={text} />
    </form>
  );
};

Form.propTypes = {
  text: PropTypes.string.isRequired,
  inputs: PropTypes.array.isRequired,
};

export default Form;
