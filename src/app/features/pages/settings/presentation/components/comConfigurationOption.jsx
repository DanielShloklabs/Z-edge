import React, { useState } from "react";
import "../../../../../common/styles/networkConfigurationOption.css"
import { useTheme } from "../../../../../common/theme/themeContext";
const COMConfigurationOption = (props) => {
  const {
    labelEnable,
    labelBaudrate,
    labelParity,
    labelDatabit,
    labelStopbit,
    placeholderBaudrate,
    placeholderParity,
    placeholderDatabit,
    placeholderStopbit,
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
        <label htmlFor="comEnable">{labelEnable}:</label>
        <input
          className="nEnable"
          type="checkbox"
          id="comEnable"
          onClick={handleEnableClick}
          checked={isChecked}
        />
      </div>
      <div className="configurationSettingsNetworkOptionInputGroup">
        <label htmlFor="baudrate">{labelBaudrate}:</label>
        <input type="text" name="baudrate" placeholder={placeholderBaudrate} />
      </div>
      <div className="configurationSettingsNetworkOptionInputGroup">
        <label htmlFor="parity">{labelParity}:</label>
        <input type="text" name="parity" placeholder={placeholderParity} />
      </div>
      <div className="configurationSettingsNetworkOptionInputGroup">
        <label htmlFor="databit">{labelDatabit}:</label>
        <input type="text" name="databit" placeholder={placeholderDatabit} />
      </div>
      <div className="configurationSettingsNetworkOptionInputGroup">
        <label htmlFor="stopbit">{labelStopbit}:</label>
        <input type="text" name="stopbit" placeholder={placeholderStopbit} />
      </div>
    </div>
  );
};

export default COMConfigurationOption;
