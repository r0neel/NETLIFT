import React from "react";
import FormBtn from "../FormBtn";
import FormInputs from "../FormInputs";

const Form = (props) => {
  const { text, inputs } = props;
  return (
    <form>
      {inputs.map((input) => (
        <FormInputs key={`${input}_input`} label={input} />
      ))}
      <FormBtn text={text} />
    </form>
  );
};

export default Form;
