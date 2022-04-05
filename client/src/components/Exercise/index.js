import React from "react";
import PropTypes from "prop-types";
import SetBtn from "../SetBtn";

const Exercise = ({ name, reps, sets }) => {
  const setsArr = [];
  for (let i = 0; i < 10; i++) {
    setsArr.push(<SetBtn reps={reps} />);
  }
  return (
    <div className=" overflow-x-scroll overflow-y-hidden">
      <h3>{name}</h3>
      <div className="flex justify-between space-x-4 whitespace-nowrap min-w-fit">
        {setsArr}
      </div>
    </div>
  );
};

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  reps: PropTypes.number.isRequired,
  sets: PropTypes.number.isRequired,
};

export default Exercise;
