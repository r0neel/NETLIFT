import React from "react";
import { Route, Routes } from "react-router-dom";

import { Title } from "../../components";
import SettingsHome from "./SettingsHome";

const Settings = () => {
  return (
    <div className="bg-nl-darkblue min-h-[calc(100vh-73px)] px-8">
      <Title text="Settings" />
      <Routes>
        <Route path="/" element={<SettingsHome />} />
      </Routes>
    </div>
  );
};
export default Settings;
