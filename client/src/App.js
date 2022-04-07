import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import {
  LoginPage,
  RegisterPage,
  Create,
  ProgramsPage,
  History,
  Err404,
  Settings,
  WorkoutPage,
} from "./pages";

import { NavBar } from "./components";

const App = () => {
  let location = useLocation();
  console.log(location);

  return (
    <div data-testid="test-app" className="bg-nl-darkblue min-h-screen">
      <Routes>
        <Route path="*" element={<Err404 />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/create" element={<Create />} />
        <Route path="/" element={<ProgramsPage />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings/*" element={<Settings />} />
        <Route path="/workouts" element={<WorkoutPage />} />
      </Routes>

      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
        <NavBar /> 
      )}
    </div>
  );
};

export default App;
