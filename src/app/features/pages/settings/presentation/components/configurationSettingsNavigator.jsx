import React, { useState } from "react";
import "../../../../../common/styles/configurationSettingsNavigatorStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import CustomButton from "../../../../reusableComponents/customButton";

const ConfigurationSettingsNavigator = ({ onOptionClick }) => {
  const [selectedOption, setSelectedOption] = useState("Network Configuration");
  const { isDarkMode } = useTheme();
  const handleButtonClick = (buttonName) => {
    setSelectedOption(buttonName);
    onOptionClick(buttonName);
  };
  return (
    <div className="configurationSettingsNavigator">
      <CustomButton
        className={`configurationSettingsNavigatorOption ${
          isDarkMode ? "dark" : ""
        } ${selectedOption === "Network Configuration" ? "selected" : ""}`}
        buttonName="Network Configuration"
        handleClick={() => handleButtonClick("Network Configuration")}
      />
      <CustomButton
        className={`configurationSettingsNavigatorOption ${
          isDarkMode ? "dark" : ""
        } ${selectedOption === "SMS" ? "selected" : ""}`}
        buttonName="SMS"
        handleClick={() => handleButtonClick("SMS")}
      />
      <CustomButton
        className={`configurationSettingsNavigatorOption ${
          isDarkMode ? "dark" : ""
        } ${selectedOption === "MAIL" ? "selected" : ""}`}
        buttonName="MAIL"
        handleClick={() => handleButtonClick("MAIL")}
      />
    </div>
  );
};

export default ConfigurationSettingsNavigator;
