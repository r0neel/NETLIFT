import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Title } from "../../components";
import BackSettings from "../../components/BackSettings";
import SettingsDelete from "./SettingsDelete";
import SettingsHome from "./SettingsHome";
import SettingsPassword from "./SettingsPassword";
import SettingsUnit from "./SettingsUnit";
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
        <Route path="/password" element={<SettingsPassword />} />
        <Route path="/unit" element={<SettingsUnit />} />
        <Route path="/delete-account" element={<SettingsDelete />} />
      </Routes>
    </div>
  );
};
export default Settings;
