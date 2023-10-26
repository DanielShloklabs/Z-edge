import React, { useState } from "react";
import "../../../../../common/styles/configurationSettingsStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import ConfigurationSettingsMAIL from "./configurationSettingsMAIL.jsx";
import ConfigurationSettingsNavigator from "./configurationSettingsNavigator.jsx";
import ConfigurationSettingsNetwork from "./configurationSettingsNetwork.jsx";
import ConfigurationSettingsSMS from "./configurationSettingsSMS.jsx";

const ConfigurationSettings = () => {
  const { isDarkMode } = useTheme();
  const [selectedOption, setSelectedOption] = useState("Network Configuration");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className={`configurationSettings ${isDarkMode ? "dark" : ""}`}>
      <ConfigurationSettingsNavigator onOptionClick={handleOptionClick} />
      {selectedOption === "Network Configuration" && (
        <ConfigurationSettingsNetwork />
      )}
      {selectedOption === "SMS" && <ConfigurationSettingsSMS />}
      {selectedOption === "MAIL" && <ConfigurationSettingsMAIL />}
    </div>
  );
};

export default ConfigurationSettings;
