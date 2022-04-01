import React from "react";
import FormBtn from "../FormBtn";

const Form = (props) => {
  const { text } = props;
  return (
    <form>
      <FormBtn text={text} />
    </form>
  );
};

export default Form;
