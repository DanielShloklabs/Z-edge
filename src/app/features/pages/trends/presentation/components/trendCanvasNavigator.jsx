import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useState } from "react";
import CustomButton from "../../../../reusableComponents/customButton";
import "../../../../../common/styles/trendCanvasNavigatorStyle.css"

const TrendCanvasNavigator = ({ onOptionClick }) => {
  const [selectedOption, setSelectedOption] = useState("Table");
  const { isDarkMode } = useTheme();
  const handleButtonClick = (buttonName) => {
    setSelectedOption(buttonName);
    onOptionClick(buttonName);
  };
  return (
    <div className="trendCanvasNavigator">
      <CustomButton
        className={`trendCanvasNavigatorOption ${
          isDarkMode ? "dark" : ""
        } ${selectedOption === "Table" ? "selected" : ""}`}
        buttonName="Table"
        handleClick={() => handleButtonClick("Table")}
      />
      <CustomButton
        className={`trendCanvasNavigatorOption ${
          isDarkMode ? "dark" : ""
        } ${selectedOption === "Chart" ? "selected" : ""}`}
        buttonName="Chart"
        handleClick={() => handleButtonClick("Chart")}
      />
    </div>
  );
};

export default TrendCanvasNavigator;
