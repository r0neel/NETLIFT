import React from "react";

// TODO: Animate pages so it falls smoothly on page 
const WorkoutCreate = () => {

  return(
    <div className="mx-auto bg-nl-darkblue min-h-screen container pt-16">
      <label htmlFor="bodyparts"></label>
      <select name="bodyparts" id="bodyparts" className="">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );};
export default WorkoutCreate;
