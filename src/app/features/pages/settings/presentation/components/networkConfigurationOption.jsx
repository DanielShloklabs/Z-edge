import React, { useState } from "react";
import "../../../../../common/styles/networkConfigurationOption.css";
import { useTheme } from "../../../../../common/theme/themeContext";
const NetworkConfigurationOption = (props) => {
  const {
    labelEnable,
    labelIP,
    labelSubnet,
    labelGateway,
    placeholderIP,
    placeholderSubnet,
    placeholderGateway,
    onEnableClick,
  } = props;

  const [isChecked, setIsChecked] = useState(false);
  const { isDarkMode } = useTheme();

  const handleEnableClick = () => {
    setIsChecked(!isChecked);
    if (onEnableClick) {
      onEnableClick(!isChecked);
    }
  };

  return (
    <div
      className={`configurationSettingsNetworkOption ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div className="configurationSettingsNetworkOptionInputGroup">
        <label htmlFor="n1enable">{labelEnable}:</label>
        <input
          className="nEnable"
          type="checkbox"
          id="n1enable"
          onClick={handleEnableClick}
          checked={isChecked}
        />
      </div>
      <div className="configurationSettingsNetworkOptionInputGroup">
        <label htmlFor="n1IP">{labelIP}:</label>
        <input type="text" name="n1IP" placeholder={placeholderIP} />
      </div>
      <div className="configurationSettingsNetworkOptionInputGroup">
        <label htmlFor="n1subnet">{labelSubnet}:</label>
        <input type="text" name="n1subnet" placeholder={placeholderSubnet} />
      </div>
      <div className="configurationSettingsNetworkOptionInputGroup">
        <label htmlFor="n1gateway">{labelGateway}:</label>
        <input type="text" name="n1gateway" placeholder={placeholderGateway} />
      </div>
    </div>
  );
};

export default NetworkConfigurationOption;
