import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Title } from "../../components";
import BackSettings from "../../components/BackSettings";
import SettingsHome from "./SettingsHome";
import SettingsUser from "./SettingsUsername";

const Settings = () => {
  let { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="bg-nl-darkblue min-h-[calc(100vh-73px)] px-8 flex flex-col">
      <Title text="Settings" />
      {pathname === "/settings" ? null : <BackSettings />}
      <Routes>
        <Route path="/" element={<SettingsHome />} />
        <Route path="/username" element={<SettingsUser />} />
      </Routes>
    </div>
  );
};
export default Settings;
