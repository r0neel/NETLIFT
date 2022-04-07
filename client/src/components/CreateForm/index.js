import React from "react";
import FormBtn from "../FormBtn";
import CreateFormInputs from "../CreateFormInputs";
import PropTypes from "prop-types";

const CreateForm = (props) => {
  const { text, inputs, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-8 m-10">
      {inputs.map((input) => (
        <CreateFormInputs key={`${input.text}_input`} label={input} />
      ))}
      <FormBtn text={text} />
    </form>
  );
};

CreateForm.propTypes = {
  text: PropTypes.string.isRequired,
  inputs: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default CreateForm;
