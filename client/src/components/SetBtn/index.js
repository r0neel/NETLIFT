import React, { useState } from "react";
import PropTypes from "prop-types";

const SetBtn = ({ reps }) => {
  const [repsDone, setRepsDone] = useState({ reps });
  const [finished, setFinished] = useState(false);
  return <button>{repsDone}</button>;
};

SetBtn.propTypes = {
  reps: PropTypes.number.isRequired,
};

export default SetBtn;
