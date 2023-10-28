import React from "react";
import { useState } from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import CustomButton from "../../../../reusableComponents/customButton";

const PointDetailsNavigator = ({ onOptionClick }) => {
  const [selectedOption, setSelectedOption] = useState("Summary");
  const { isDarkMode } = useTheme();
  const handleButtonClick = (buttonName) => {
    setSelectedOption(buttonName);
    onOptionClick(buttonName);
  };
  return (
    <div className="deviceDetailsNavigator">
      <CustomButton
        className={`deviceDetailsNavigatorOption ${isDarkMode ? "dark" : ""} ${
          selectedOption === "Summary" ? "selected" : ""
        }`}
        buttonName="Summary"
        handleClick={() => handleButtonClick("Summary")}
      />
      <CustomButton
        className={`deviceDetailsNavigatorOption ${isDarkMode ? "dark" : ""} ${
          selectedOption === "Properties" ? "selected" : ""
        }`}
        buttonName="Properties"
        handleClick={() => handleButtonClick("Properties")}
      />
      <CustomButton
        className={`deviceDetailsNavigatorOption ${isDarkMode ? "dark" : ""} ${
          selectedOption === "Alarms" ? "selected" : ""
        }`}
        buttonName="Alarms"
        handleClick={() => handleButtonClick("Alarms")}
      />
      <CustomButton
        className={`deviceDetailsNavigatorOption ${isDarkMode ? "dark" : ""} ${
          selectedOption === "Trends" ? "selected" : ""
        }`}
        buttonName="Trends"
        handleClick={() => handleButtonClick("Trends")}
      />
    </div>
  );
};

export default PointDetailsNavigator;
