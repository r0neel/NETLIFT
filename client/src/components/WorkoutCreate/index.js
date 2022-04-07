import React from "react";
// import axios from "axios";

import CreateForm from "../CreateForm";

// TODO: Animate pages so it falls smoothly on page 
const WorkoutCreate = () => {
  const inputs = [
    { 
      text: "title",
      message: "Max thirty characters",
      pattern: ".{0,30}"
    }, 
    { 
      text: "weight",
      message: "Starting weight"
    },
    { 
      text: "exercise",
      message: "Starting weight"
    },
  ];

  return(
    <div className="mx-auto min-h-screen container pt-16">
      <CreateForm text="Create" inputs={inputs}>
      
      </CreateForm>
    </div>
  );};
export default WorkoutCreate;
