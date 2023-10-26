import React from "react";
import "../../../../common/styles/alamsStyle.css";
import { useTheme } from "../../../../common/theme/themeContext";
import AlarmTable from "./components/alarmTable.jsx";
import CustomButton from "../../../reusableComponents/customButton";

const Alarms = () => {
  const { isDarkMode } = useTheme();
  const timestamp = ["2023-10-01", "2023-10-05"];
  const trendFlags = ["{}", "{}"];
  const status = ["{ok}", "{ok}"];
  const value = ["25.1 °C", "30.4 °C"];
  return (
    <div className={`alarms ${isDarkMode ? "dark" : ""}`}>
      <AlarmTable
        timestamp={timestamp}
        trendFlags={trendFlags}
        status={status}
        value={value}
      />
      <div className="alarmBtns">
        <CustomButton className={`alamBtn ${isDarkMode ? "dark" : ""}`} buttonName="Acknowledge Alarms" />
        <CustomButton className={`alamBtn ${isDarkMode ? "dark" : ""}`} buttonName="Clear Alarms" />
        <CustomButton className={`alamBtn ${isDarkMode ? "dark" : ""}`} buttonName="Export CSV" />
        <CustomButton className={`alamBtn ${isDarkMode ? "dark" : ""}`} buttonName="Export PDF" />
      </div>
    </div>
  );
};

export default Alarms;
