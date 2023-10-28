import React from "react";
import { Routes, Route } from "react-router-dom";
import Display from "../features/pages/display/presentation/display";
import Devices from "../features/pages/devices/presentation/devices";
import Alarms from "../features/pages/alarms/presentation/alarms";
import Trends from "../features/pages/trends/presentation/trends";
import Rules from "../features/pages/ruleEditor/presentation/rules";
import Schedules from "../features/pages/schedules/presentation/schedules";
import Settings from "../features/pages/settings/presentation/settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Display />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/alarms" element={<Alarms />} />
      <Route path="/trends" element={<Trends />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/schedule" element={<Schedules/>}/>
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
