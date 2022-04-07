import React from "react";
import WorkoutPreview from "../../components/WorkoutPreview";
import dayjs from "dayjs";
import Title from "../../components/Title";
import { fetchProfile, getQuote } from "../../actions/userActions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProgramsPage = () => {
  const programs = useSelector((state) => state.user.profile);
  const loading = useSelector((state) => state.user.loading);
  const dispatch = useDispatch();
  const getProgramData = () => dispatch(fetchProfile());

  useEffect(() => {
    getProgramData();
  }, []);

  const renderPreview = () => {
    console.log(loading);
    if (programs._programs) {
      let trainingDays = programs._programs[0].training_days.map((day) =>
        day < dayOfWeek ? day + 7 : day
      );
      trainingDays = trainingDays.sort((x, y) => x - y);
      return trainingDays.map((day) => (
        <WorkoutPreview
          day={today.day(day).format("ddd D MMM")}
          exercises={exerciseList}
          key={today.day(day).format()}
          workoutNum={1}
        />
      ));
    } else {
      return <p>loading</p>;
    }
  };

  console.log("rand log", programs._programs);
  // console.log(programs._lifts);
  const lsToken = localStorage.getItem("token");
  const nav = useNavigate();
  useEffect(() => {
    if (lsToken == null) {
      nav("/login", { replace: true });
    }
  });
  // TODO: replace this with data from redux
  const [quote, setQuote] = useState("");
  const token = useSelector((state) => state.token);
  useEffect(async () => {
    setQuote(await getQuote());
  }, [token]);

  const fakelift1 = {
    id: 1,
    rep: 5,
    set: 5,
    exercise_id: 2,
  };

  const fakelift2 = {
    id: 2,
    rep: 5,
    set: 5,
    exercise_id: 1,
  };

  const fakelift3 = {
    id: 3,
    rep: 5,
    set: 5,
    exercise_id: 3,
  };

  const fakeExercise1 = {
    id: 1,
    name: "squat",
  };
  const fakeExercise2 = {
    id: 2,
    name: "dead lift",
  };
  const fakeExercise3 = {
    id: 3,
    name: "bench",
  };

  const exerciseList = [
    { name: fakeExercise1.name, sets: fakelift2.set, reps: fakelift1.rep },
    { name: fakeExercise2.name, sets: fakelift1.set, reps: fakelift1.rep },
    { name: fakeExercise3.name, sets: fakelift3.set, reps: fakelift3.rep },
  ];
  const today = dayjs();
  const dayOfWeek = today.day();
  // if the day has already passed we add seven so we can order them from the current date

  // TODO: turn this into a link to the workout page
  return (
    <div className="bg-nl-darkblue min-h-[calc(100vh-73px)] px-8">
      <Title text="Home" />
      <h2 className="text-center text-slate-50 text-lg font-bold italic pt-4 pb-8">
        {quote}
      </h2>
      <div className=" space-y-10">
        {loading ? (
          <p className=" text-slate-50 text-lg capitalize text-center">
            Loading programs
          </p>
        ) : (
          renderPreview()
        )}
      </div>
    </div>
  );
};

export default ProgramsPage;
