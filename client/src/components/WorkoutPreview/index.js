import React from "react";
import PropTypes from "prop-types";

const WorkoutPreview = (props) => {
  const { day, exercises } = props;

  return (
    <>
      <p>{day}</p>
      <ul>
        {exercises.map((exercise) => {
          return (
            <li key={exercise.name}>
              <span>{exercise.name}</span>
              <span>
                {exercise.sets} x {exercise.reps}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

WorkoutPreview.propTypes = {
  day: PropTypes.string.isRequired,
  exercises: PropTypes.array.isRequired,
};

export default WorkoutPreview;
