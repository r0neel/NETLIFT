import React, { useState } from "react";
import axios from "axios";

// TODO: Animate pages so it falls smoothly on page 
const WorkoutCreate = () => {
  const [getAllExercises, setGetAllExercises] = useState("");

  // const options = {
  //   method: "GET",
  //   url: "https://exercisedb.p.rapidapi.com/exercises",
  //   headers: {
  //     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  //     "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
  //   },
  // };

  const fetchExercises = async () => {
    const { data } = axios.get("https://exercisedb.p.rapidapi.com/exercises");
    setGetAllExercises(data.id);
  };

  console.log(fetchExercises);


  return(
    <div className="mx-auto bg-nl-darkblue min-h-screen container pt-16">
      <label htmlFor="bodyparts"></label>
      <select name="bodyparts" id="bodyparts" className="">
        
      </select>
    </div>
  );};
export default WorkoutCreate;
