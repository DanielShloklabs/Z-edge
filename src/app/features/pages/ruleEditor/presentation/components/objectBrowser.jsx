import React from "react";
import "../../../../../common/styles/objectBrowserStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import { FiRefreshCcw } from "react-icons/fi";

const ObjectBrowser = ({
  bacnetData,
  toggleDevice,
  expandedDevices,
  onDragStart,
  refresh,
}) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`objectBrowser ${isDarkMode ? "dark" : ""}`}>
      <div className={`objectBrowserHeader ${isDarkMode ? "dark" : ""}`}>
        Object Browser
        <FiRefreshCcw className="objectBrowserRefresh" onClick={refresh} />
      </div>
      <div className="objectBrowserContent">
        <ul>
          {Object.keys(bacnetData).map((deviceKey) => {
            const deviceData = bacnetData[deviceKey];
            const device_id = deviceData.device_id;
            // const mac_address = deviceData.mac_address;
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
                          onDragStart={(e) => onDragStart(e, object, device_id)}
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
  );
};

export default ObjectBrowser;
