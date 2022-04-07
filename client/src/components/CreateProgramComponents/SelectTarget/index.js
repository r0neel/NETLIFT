import React from "react";

const SelectTarget = () => {
  const bodyParts = [
    "back",
    "cardio",
    "chest",
    "lower arms",
    "lower legs",
    "neck",
    "shoulders",
    "upper arms",
    "upper legs",
    "waist",
  ];
  return (
    <>
      <label htmlFor="target">Select the body part you want to target</label>
      <select required name="target" id="target">
        {bodyParts.sort().map((part) => (
          <option key={`bodyPart_${part}`} value={part}>
            {part}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectTarget;
