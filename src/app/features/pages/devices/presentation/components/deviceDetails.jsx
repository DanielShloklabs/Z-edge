import React, { useState } from "react";
import "../../../../../common/styles/deviceDetailsStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import DeviceDetailsLogs from "./deviceDetailsLogs.jsx";
import DeviceDetailsNavigator from "./deviceDetailsNavigator.jsx";
import DeviceDetailsProperties from "./deviceDetailsProperties.jsx";
import DeviceDetailsSummary from "./deviceDetailsSummary.jsx";
import CustomButton from "../../../../reusableComponents/customButton";
import AddPointsForm from "./addPointsForm.jsx";

const DeviceDetails = () => {
  const { isDarkMode } = useTheme();
  const [selectedOption, setSelectedOption] = useState("Summary");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
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
    <div className={`deviceDetails ${isDarkMode ? "dark" : ""}`}>
      <div className={`deviceDetailsHeader ${isDarkMode ? "dark" : ""}`}>
        Device Name
      </div>
      <div className="deviceDetailsContent">
        <DeviceDetailsNavigator onOptionClick={handleOptionClick} />
        {selectedOption === "Summary" && <DeviceDetailsSummary />}
        {selectedOption === "Properties" && <DeviceDetailsProperties />}
        {selectedOption === "Logs" && <DeviceDetailsLogs />}

        <div className="deviceNetworkPropertiesBtnsGroup">
          <CustomButton
            className={`deviceNetworkPropertiesBtn ${isDarkMode ? "dark" : ""}`}
            buttonName="Save"
          />
          <CustomButton
            handleClick={() => handleOpen()}
            className={`deviceNetworkPropertiesBtn ${isDarkMode ? "dark" : ""}`}
            buttonName="Add Points"
          />
        </div>
        {isOverlayOpen && (
          <div className="overlay">
            {isFormOpen && (
              <AddPointsForm
                isFormOpen={isFormOpen}
                setIsFormOpen={handleClose}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DeviceDetails;
