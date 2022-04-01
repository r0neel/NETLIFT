import React from "react";

const FormBtn = ({ text }) => {
  return (
    <button className=" bg-nl-lightblue text-nl-darkblue text-2xl font-medium py-4 px-16 rounded-xl mx-auto">
      {text}
    </button>
  );
};

export default FormBtn;
