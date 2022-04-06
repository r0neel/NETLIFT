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
      message: "Max thirty characters"
    }, 
    { 
      text: "exercise",
      message: "If you know what you want to include into your program"
    },
    { 
      text: "body part",
      message: "If you know what you want to focus on"
    },
    { 
      text: "equipment",
      message: "If you know what you want to use"
    },
    { 
      text: "weight",
      message: "Starting weight"
    },
    { 
      text: "reps",
      message: "How many reps per exercise"
    },
  ];

  return(
    <div className="mx-auto bg-nl-darkblue min-h-screen container">
      <CreateForm text="Create" inputs={inputs}>

      </CreateForm>
      {/* <h1>Exercise constructions 1</h1> */}
      {/* <h1>Select body part</h1> */}
      {/* <h1>Equipment</h1> */}
      {/* <h1>Show selected workouts</h1> */}
      {/* <h1>2</h1> */}
      {/* <h1>Starting Weight (dropdown weight selectors)</h1> */}
      {/* <h1>Reps</h1> */}
      {/* <h1>Frequency</h1> */}
      {/* <h1>Create Program button</h1> */}
      {/* <label htmlFor="bodyparts">Body Parts</label>
      <select name="bodyparts" id="bodyparts" className="">
        
      </select>
      <label htmlFor=""></label> */}
    </div>
  );};
export default WorkoutCreate;
