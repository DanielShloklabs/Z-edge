import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useState } from "react";
import PointDetailsNavigator from "./pointDetailsNavigator.jsx";
import PointsDetailsSummary from "./pointsDetailsSummary.jsx";
import PointDetailsProperties from "./pointDetailsProperties.jsx";
import PointDetailsAlarms from "./pointDetailsAlarms.jsx";
import PointDetailsTrends from "./pointDetailsTrends.jsx";

const PointDetails = () => {
  const { isDarkMode } = useTheme();
  const [selectedOption, setSelectedOption] = useState("Summary");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className={`deviceDetails ${isDarkMode ? "dark" : ""}`}>
      <div className={`deviceDetailsHeader ${isDarkMode ? "dark" : ""}`}>
        Point Name
      </div>
      <div className="deviceDetailsContent">
        <PointDetailsNavigator onOptionClick={handleOptionClick} />
        {selectedOption === "Summary" && <PointsDetailsSummary />}
        {selectedOption === "Properties" && <PointDetailsProperties />}
        {selectedOption === "Alarms" && <PointDetailsAlarms />}
        {selectedOption === "Trends" && <PointDetailsTrends />}
      </div>
    </div>
  );
};

export default PointDetails;
