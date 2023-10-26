import React, { useState, useEffect } from "react";
import "../../../../../common/styles/commonNodeStyle.css";
import { Handle, Position } from "reactflow";
import { useTheme } from "../../../../../common/theme/themeContext";

const CustomNode = ({ data, isConnectable }) => {
  const { isDarkMode } = useTheme();
  const [isOutput, setIsOutput] = useState(false);
  const [presentValue, setPresentValue] = useState(data.value.toFixed(2));

  const handleToggleChange = () => {
    setIsOutput(!isOutput);
  };

  const handlePosition = isOutput ? Position.Left : Position.Right;
  const handleType = isOutput ? "target" : "source";
  const handleId = isOutput ? "OUT" : "IN";

  useEffect(() => {
    setPresentValue(data.value.toFixed(2));
    const fetchUpdatedValueFromServer = (label, callback) => {
      fetch(
        `${data.serverEndpoint}/fetch_bacnet_object_present_value?mac=${data.mac_address}&object_id=${label}`
      )
        .then((response) => response.json())
        .then((data) => {
          const updatedValue = data.properties;
          callback(updatedValue);
        })
        .catch((error) => {
          console.error("Error fetching data from server:", error);
        });
    };
    const intervalId = setInterval(() => {
      fetchUpdatedValueFromServer(data.label, (newValue) => {
        setPresentValue(newValue.toFixed(2));
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [data.value, data.label, data.serverEndpoint, data.mac_address]);

  return (
    <div className="customNodeContainer">
      <div className="customNodeHeading">
        {data.label.includes("Value") || data.label.includes("Output") ? (
          <div className="toggleSwitch">
            <label className={`switchLabel ${isOutput ? "active" : ""}`}>
              <input
                type="checkbox"
                checked={isOutput}
                onChange={handleToggleChange}
              />
              <span className="slider"></span>
              {isOutput ? "OUT" : "IN"}
            </label>
          </div>
        ) : null}
        {data.label}
      </div>
      <div className={`customInputNodeContent ${isDarkMode ? "dark" : ""}`}>
        <b>Present Value:</b> {presentValue}
      </div>

      <Handle
        type={handleType}
        position={handlePosition}
        id={handleId}
        className="customHandle"
        isConnectable={data.isConnectable}
      />
    </div>
  );
};

export default CustomNode;
