import React from "react";
import { Routes, Route } from "react-router-dom";
import Display from "../features/pages/display/presentation/display";
import Devices from "../features/pages/devices/presentation/devices";
import Alarms from "../features/pages/alarms/presentation/alarms";
import Trends from "../features/pages/trends/presentation/trends";
import Rules from "../features/pages/ruleEditor/presentation/rules";
import Settings from "../features/pages/settings/presentation/settings";
// import { useAuth } from "../common/utils/authContext";

const AppRoutes = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <Routes>
    
      <Route path="/" element={<Display />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/alarms" element={<Alarms />} />
      <Route path="/trends" element={<Trends />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
