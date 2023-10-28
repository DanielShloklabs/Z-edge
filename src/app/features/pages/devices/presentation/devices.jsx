import React from "react";
import "../../../../common/styles/devicesStyle.css";
import { useTheme } from "../../../../common/theme/themeContext";
import DeviceBrowser from "./components/deviceBrowser.jsx";
import { useState } from "react";
import FetchBacnetDevices from "../../../../common/utils/fetchBacnetDevices";
import DeviceNetwork from "./components/deviceNetwork.jsx";
import DeviceDetails from "./components/deviceDetails.jsx";
import PointDetails from "./components/pointDetails.jsx"

const Devices = () => {
  const { isDarkMode } = useTheme();
  const [expandedDevices, setExpandedDevices] = useState([]);
  const bacnetData = FetchBacnetDevices();
  const [deviceDetails, setDeviceDetails] = useState(false);
  const [pointDetails, setPointDetails] = useState(true);

  const toggleDevice = (deviceId) => {
    if (expandedDevices.includes(deviceId)) {
      setExpandedDevices(expandedDevices.filter((id) => id !== deviceId));
    } else {
      setExpandedDevices([...expandedDevices, deviceId]);
    }
  };
  const handleClick = (object) => {
    console.log(object);
    setDeviceDetails(true);
    setPointDetails(true);
  };
  return (
    <div className={`devices ${isDarkMode ? "dark" : ""}`}>
      <DeviceBrowser
        bacnetData={bacnetData}
        expandedDevices={expandedDevices}
        toggleDevice={toggleDevice}
        onClick={handleClick}
      />
      {deviceDetails ? <DeviceDetails /> : <DeviceNetwork /> || pointDetails ? <PointDetails/> : <DeviceNetwork /> }
    </div>
  );
};

export default Devices;
