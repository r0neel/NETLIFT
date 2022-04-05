import React from "react";
import Title from "../../components/Title";
import WorkoutSection from "../../components/WorkoutSection";

const WorkoutPage = () => {
  const workouts = [
    { name: "Squats", reps: 5, sets: 5 },
    { name: "OHP", reps: 5, sets: 12 },
    { name: "Deadlift", reps: 5, sets: 1 },
  ];
  return (
    <div className="bg-nl-darkblue min-h-screen px-8">
      <Title text="Workout" />
      <div className="-mx-8 px-8 bg-nl-lightgrey space-y-8">
        <WorkoutSection workouts={workouts} />
      </div>
    </div>
  );
};

export default WorkoutPage;
