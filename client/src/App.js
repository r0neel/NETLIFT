import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import * as Pages from "./pages";
import { NavBar } from "./components";

const App = () => {
  let location = useLocation();

  return (
    <>
      <Routes>
        <Route path="login" element={<Pages.LoginPage />} />
        <Route path="register" element={<Pages.RegisterPage />} />
        <Route path="home" element={<Pages.ProgramsPage />} />
        <Route path="history" element={<Pages.History />} />
        <Route path="progress" element={<Pages.Progress />} />
        <Route path="settings" element={<Pages.Settings />} />
      </Routes>
      {location.pathname === "/login" ||
      location.pathname === "/register" ? null : (
          <NavBar />
        )}
    </>
  );
};

export default App;
