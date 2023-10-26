import React from "react";
import "../../../../common/styles/trendsStyle.css";
import TrendNavigator from "./components/trendNavigator.jsx";
import TrendCanvas from "./components/trendCanvas.jsx";
import { useState } from "react";
import FetchBacnetDevices from "../../../../common/utils/fetchBacnetDevices";

const Trends = () => {
  const [expandedDevices, setExpandedDevices] = useState([]);
  const [object, setObject] = useState("");
  const bacnetData = FetchBacnetDevices();

  const toggleDevice = (deviceId) => {
    if (expandedDevices.includes(deviceId)) {
      setExpandedDevices(expandedDevices.filter((id) => id !== deviceId));
    } else {
      setExpandedDevices([...expandedDevices, deviceId]);
    }
  };
  const handleClick = (object) => {
    console.log(object);
    setObject(object);
  };
  return (
    <div className="trends">
      <TrendNavigator
        bacnetData={bacnetData}
        expandedDevices={expandedDevices}
        toggleDevice={toggleDevice}
        onClick={handleClick}
      />
      <TrendCanvas object={object} />
    </div>
  );
};

export default Trends;
