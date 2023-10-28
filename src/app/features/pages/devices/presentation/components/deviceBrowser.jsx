import React from "react";
import "../../../../../common/styles/trendNavigatorStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useMenu } from "../../../../../common/utils/menuContext";


const DeviceBrowser = ({
  bacnetData,
  toggleDevice,
  expandedDevices,
  onClick,
}) => {
  const { isDarkMode } = useTheme();
  const { open } = useMenu();
  return open ? (
    <div className={`trendNavigator ${isDarkMode ? "dark" : ""}`}>
      <div className={`trendNavigatorHeader ${isDarkMode ? "dark" : ""}`}>
        Device Browser
      </div>
      <div className="trendNavigatorContent">
        <ul>
          {Object.keys(bacnetData).map((deviceKey) => {
            const deviceData = bacnetData[deviceKey];
            const device_id = deviceData.device_id;
            const object_list = deviceData.object_list;

            return (
              <li key={device_id} className="deviceList">
                <span
                  className="device"
                  onClick={() => toggleDevice(deviceKey)}
                >
                  {expandedDevices.includes(deviceKey) ? device_id : device_id}
                </span>
                {expandedDevices.includes(deviceKey) && (
                  <ul className="ul">
                    <div className="objects">
                      {object_list.map((object, index) => (
                        <li
                          className="objectList"
                          key={index}
                          draggable
                          onClick={() => onClick(object)}
                        >
                          {object}
                        </li>
                      ))}
                    </div>
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  ) : null;
};

export default DeviceBrowser;
