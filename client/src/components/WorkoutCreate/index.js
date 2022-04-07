import React from "react";
// import axios from "axios";

import CreateForm from "../CreateForm";

// TODO: Animate pages so it falls smoothly on page 
const WorkoutCreate = () => {
  // const [getAllExercises, setGetAllExercises] = useState("");

  // const options = {
  //   method: "GET",
  //   url: "https://exercisedb.p.rapidapi.com/exercises",
  //   headers: {
  //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  //     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  //   },
  // };

  // const fetchExercises = async () => {
  //   const { data } = axios.get("https://exercisedb.p.rapidapi.com/exercises");
  //   setGetAllExercises(data.id);
  // };

  // console.log(fetchExercises);

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
  ];

  return(
    <div className="mx-auto min-h-screen container pt-16">
      <CreateForm text="Create" inputs={inputs}>

      </CreateForm>
    </div>
  );};
export default WorkoutCreate;
