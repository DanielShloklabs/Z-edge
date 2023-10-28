import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/deviceNetworkPropertiesStyle.css";
import CustomButton from "../../../../reusableComponents/customButton";
import { IoChevronBackSharp } from "react-icons/io5";
import { Checkbox } from "@mui/material";
import { useState } from "react";
import AddDeviceForm from "./addDeviceForm.jsx";

const DeviceNetworkProperties = ({
  networkProps,
  setDeviceNetworkProperty,
}) => {
  const { isDarkMode } = useTheme();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const goBack = () => {
    setDeviceNetworkProperty(false);
  };

  const handleOpen = () => {
    setIsFormOpen(true);
    setIsOverlayOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setIsOverlayOpen(false);
  };

  return (
    <div className={`deviceNetworkProperties ${isDarkMode ? "dark" : ""}`}>
      <div className="deviceNetworkPropertiesHeaderGroup">
        <div
          onClick={goBack}
          className={`deviceNetworkPropertiesHeader devices ${
            isDarkMode ? "dark" : ""
          }`}
        >
          <IoChevronBackSharp size={20} />
          Devices
        </div>
        <div
          className={`deviceNetworkPropertiesHeader ${
            isDarkMode ? "dark" : ""
          }`}
        >
          Network Properties
        </div>
      </div>
      <div
        className={`deviceNetworkPropertiesContent ${isDarkMode ? "dark" : ""}`}
      >
        <div className="deviceNetworkPropertiesGroup">
          <div className="deviceNetworkPropertyLabel">Name :</div>
          <div className="deviceNetworkPropertyData">{networkProps.name}</div>
        </div>
        <div className="deviceNetworkPropertiesGroup">
          <div className="deviceNetworkPropertyLabel">Network Type :</div>
          <div className="deviceNetworkPropertyData">{networkProps.type}</div>
        </div>
        <div className="deviceNetworkPropertiesGroup">
          <div className="deviceNetworkPropertyLabel">Network Status :</div>
          <div className="deviceNetworkPropertyData">{networkProps.status}</div>
        </div>
        <div className="deviceNetworkPropertiesGroup">
          <div className="deviceNetworkPropertyLabel">Network Enable :</div>
          <div className="deviceNetworkPropertyData">
            {networkProps.enable ? (
              <Checkbox checked color="primary" />
            ) : (
              <Checkbox color="primary" />
            )}
          </div>
        </div>
        <div className="deviceNetworkPropertiesGroup">
          <div className="deviceNetworkPropertyLabel">Network Health :</div>
          <div className="deviceNetworkPropertyData">Good</div>
        </div>
        <div className="deviceNetworkPropertiesGroup">
          <div className="deviceNetworkPropertyLabel">Last Poll Time :</div>
          <div className="deviceNetworkPropertyData">
            {networkProps.lastPollTime}
          </div>
        </div>
        <div className="deviceNetworkPropertiesBtnsGroup">
          <CustomButton
            className={`deviceNetworkPropertiesBtn ${isDarkMode ? "dark" : ""}`}
            buttonName="Save"
          />
          <CustomButton
            handleClick={() => handleOpen()}
            className={`deviceNetworkPropertiesBtn ${isDarkMode ? "dark" : ""}`}
            buttonName="Add Device"
          />
        </div>
      </div>
      {isOverlayOpen && (
        <div className="overlay">
          {isFormOpen && (
            <AddDeviceForm
              isFormOpen={isFormOpen}
              setIsFormOpen={handleClose}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DeviceNetworkProperties;
