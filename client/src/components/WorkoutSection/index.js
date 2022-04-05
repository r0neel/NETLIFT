import React from "react";
import PropTypes from "prop-types";

import Exercise from "../Exercise";
const WorkoutSection = ({ workouts }) => {
  return (
    <>
      {workouts.map((workout) => (
        <Exercise
          key={workout.name}
          sets={workout.sets}
          reps={workout.reps}
          name={workout.name}
        />
      ))}
    </>
  );
};

WorkoutSection.propTypes = {
  workouts: PropTypes.array.isRequired,
};
export default WorkoutSection;
