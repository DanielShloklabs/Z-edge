import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useState } from "react";
import CustomButton from "../../../../reusableComponents/customButton";
import "../../../../../common/styles/deviceDetailsNavigatorStyle.css"

const DeviceDetailsNavigator = ({ onOptionClick }) => {
  const [selectedOption, setSelectedOption] = useState("Summary");
  const { isDarkMode } = useTheme();
  const handleButtonClick = (buttonName) => {
    setSelectedOption(buttonName);
    onOptionClick(buttonName);
  };
  return (
    <div className="deviceDetailsNavigator">
      <CustomButton
        className={`deviceDetailsNavigatorOption ${
          isDarkMode ? "dark" : ""
        } ${selectedOption === "Summary" ? "selected" : ""}`}
        buttonName="Summary"
        handleClick={() => handleButtonClick("Summary")}
      />
      <CustomButton
        className={`deviceDetailsNavigatorOption ${
          isDarkMode ? "dark" : ""
        } ${selectedOption === "Properties" ? "selected" : ""}`}
        buttonName="Properties"
        handleClick={() => handleButtonClick("Properties")}
      />
      <CustomButton
        className={`deviceDetailsNavigatorOption ${
          isDarkMode ? "dark" : ""
        } ${selectedOption === "Logs" ? "selected" : ""}`}
        buttonName="Logs"
        handleClick={() => handleButtonClick("Logs")}
      />
    </div>
  );
};

export default DeviceDetailsNavigator;
