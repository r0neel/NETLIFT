import React from "react";

const SelectSets = ({ name, max }) => {
  return (
    <>
      <label htmlFor={name}>How many {name} would you like to do?</label>
      <input required name={name} id={name} type="number" min={1} max={max} />
    </>
  );
};

export default SelectSets;
