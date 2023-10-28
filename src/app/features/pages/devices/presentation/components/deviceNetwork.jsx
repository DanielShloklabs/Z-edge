import React, { useState } from "react";
import "../../../../../common/styles/deviceNetworkStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext.js";
import CustomButton from "../../../../reusableComponents/customButton.jsx";
import DeviceNetworkForm from "./deviceNetworkForm.jsx";
import DeviceNetworkProperties from "./deviceNetworkProperties.jsx";
import DeviceNetworkTable from "./deviceNetworkTable.jsx";

const DeviceNetwork = () => {
  const { isDarkMode } = useTheme();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [deviceNetworkProperty, setDeviceNetworkProperty] = useState(false);
  const [networkProps, setNetworkProps] = useState([]);

  const addNetwork = (data) => {
    console.log(data);
    let existingData = JSON.parse(localStorage.getItem("deviceNetwork")) || [];
    existingData = Array.isArray(existingData) ? existingData : [];
    existingData.push(data);
    localStorage.setItem("deviceNetwork", JSON.stringify(existingData));
    const storedData = localStorage.getItem("deviceNetwork");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      console.log(parsedData);
    }
  };

  const networkProperties = (row) => {
    setNetworkProps(row);
    setDeviceNetworkProperty(true);
  };
  const handleOpen = () => {
    setIsFormOpen(true);
    setIsOverlayOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setIsOverlayOpen(false);
  };
  return deviceNetworkProperty ? (
    <DeviceNetworkProperties
      networkProps={networkProps}
      setDeviceNetworkProperty ={setDeviceNetworkProperty}
    />
  ) : (
    <div className={`deviceNetwork ${isDarkMode ? "dark" : ""}`}>
      <DeviceNetworkTable networkProperties={networkProperties} />
      <div className="deviceNetworkBtns">
        <CustomButton
          handleClick={() => handleOpen()}
          className={`deviceNetworkBtn ${isDarkMode ? "dark" : ""}`}
          buttonName="Add Network"
        />
        <CustomButton
          className={`deviceNetworkBtn ${isDarkMode ? "dark" : ""}`}
          buttonName="Edit Network"
        />
        <CustomButton
          className={`deviceNetworkBtn ${isDarkMode ? "dark" : ""}`}
          buttonName="Delete Network"
        />
        {isOverlayOpen && (
          <div className="overlay">
            {isFormOpen && (
              <DeviceNetworkForm
                isFormOpen={isFormOpen}
                setIsFormOpen={handleClose}
                addNetwork={addNetwork}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceNetwork;
