import React from "react";

const SelectEquipment = () => {
  const equipment = [
    "barbell",
    "body weight",
    "cable",
    "dumbbell",
    "kettlebell",
    "tire",
    "trap bar",
  ];
  return (
    <>
      <label htmlFor="equipment">Select the equipment you want to use</label>
      <select required name="equipment" id="equipment">
        {equipment.sort().map((part) => (
          <option key={`equipment_${part}`} value={part}>
            {part}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectEquipment;
