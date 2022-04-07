import React from "react";
// import axios from "axios";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// TODO: Animate pages so it falls smoothly on page 

// TODO: Make an add exercise button that links to /test route
// TODO: Get results from usestate/effect to display what exercises were selected
// TODO: style /test page
// TODO: push results onto programs page

const WorkoutCreate = () => {
  

  return(
    <div className="mx-auto min-h-screen container pt-16">
      <form
      role="form"
      className="flex flex-col space-y-8"
    >
      <div className="">
        <FontAwesomeIcon className="w-8 h-8" icon={faPlus}></FontAwesomeIcon>
      </div>

      <button className=" bg-nl-lightblue text-nl-darkblue text-2xl font-medium py-4 px-16 rounded-xl mx-auto hover:opacity-80">
      Create
      </button>
      </form>
    </div>
  );};
export default WorkoutCreate;
