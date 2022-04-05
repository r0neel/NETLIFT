import React, { useState } from "react";
import PropTypes from "prop-types";

const SetBtn = ({ reps }) => {
  const [repsDone, setRepsDone] = useState(reps);
  const [finished, setFinished] = useState(false);
  const reset = () => {
    setRepsDone(reps);
    setFinished(false);
  };
  const handleReps = () => {
    repsDone > 1 ? setRepsDone(repsDone - 1) : reset();
  };
  const clickHandler = () => {
    finished ? handleReps() : setFinished(true);
  };

  return <button onClick={clickHandler}>{repsDone}</button>;
};

SetBtn.propTypes = {
  reps: PropTypes.number.isRequired,
};

export default SetBtn;
