import React from "react";
import SelectEquipment from "../SelectEquipmemt";
import SelectSets from "../SelectSets";
import SelectTarget from "../SelectTarget";

// TODO: Animate pages so it falls smoothly on page
const WorkoutCreate = () => {
  const loadExercises = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const target = form.target.value;
    const equipment = form.equipment.value;
    const sets = form.sets.value;
    const reps = form.reps.value;
    console.log(target, equipment, sets, reps);
  };
  return (
    <div className="mx-auto min-h-screen container pt-16">
      <form onSubmit={loadExercises}>
        <SelectTarget />
        <SelectEquipment />
        <SelectSets name={"sets"} max={20} />
        <SelectSets name={"reps"} />
        <input type="submit" value="Find exercises" />
      </form>
    </div>
  );
};
export default WorkoutCreate;
