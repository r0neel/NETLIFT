import React from "react";

const SelectExercise = ({ data, submitExercise }) => {
  let uniqueData = [];
  data.forEach((elem) => {
    if (uniqueData.indexOf(elem.name) === -1) uniqueData.push(elem.name);
  });
  return (
    <form onSubmit={submitExercise}>
      <label htmlFor="exercise">Select the exercise you want to add</label>
      <select required name="exercise" id="exercise">
        {uniqueData.sort().map((exercise, index) => (
          <option
            key={`exercise_${exercise.replaceAll(" ", "_")}`}
            value={exercise}
          >
            {exercise}
          </option>
        ))}
      </select>
      <input type="submit" value="Add Exercise" />
    </form>
  );
};

export default SelectExercise;
