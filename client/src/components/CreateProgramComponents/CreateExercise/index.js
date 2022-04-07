import React, { useState } from "react";
import axios from "axios";
import SelectEquipment from "../SelectEquipmemt";
import SelectSets from "../SelectSets";
import SelectTarget from "../SelectTarget";
import SelectExercise from "../SelectExercise";

// TODO: Animate pages so it falls smoothly on page
const WorkoutCreate = () => {
  const [exercises, setExercises] = useState();
  const [reps, setReps] = useState();
  const [sets, setSets] = useState();

  const reset = () => {
    setExercises(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const loadExercises = async (e) => {
    e.preventDefault();
    try {
      const form = e.currentTarget;
      const target = form.target.value;
      const equipment = form.equipment.value;
      const setsVal = form.sets.value;
      setSets(setsVal);
      const repsVal = form.reps.value;
      setReps(repsVal);
      const queryString = `${process.env.API_URL}exercises?bodyPart=${target}&equipment=${equipment}`;
      const { data } = await axios.get(queryString);
      setExercises(data);
    } catch (e) {
      alert("We don't have any exercises matching that criteria");
    }
  };

  return (
    <div className="mx-auto container mt-4 text-nl-darkblue p-8">
      <h2 className=" text-center text-2xl pb-8">
        Here you can choose an exercise to add
      </h2>
      <form
        onSubmit={loadExercises}
        onChange={reset}
        className="flex flex-col text-lg space-y-6"
      >
        <SelectTarget />
        <SelectEquipment />
        <SelectSets name={"sets"} max={20} />
        <SelectSets name={"reps"} />
        <input
          className=" bg-nl-lightblue text-nl-darkblue text-2xl font-medium py-4 px-16 rounded-xl mx-auto hover:opacity-80"
          type="submit"
          value="Find exercises"
        />
      </form>
      {exercises && (
        <SelectExercise data={exercises} submitExercise={submitHandler} />
      )}
    </div>
  );
};
export default WorkoutCreate;
