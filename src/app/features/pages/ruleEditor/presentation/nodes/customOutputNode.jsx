import React from "react";
import "../../../../../common/styles/commonNodeStyle.css";
import { Handle, Position } from "reactflow";
import { useTheme } from "../../../../../common/theme/themeContext";

const CustomOutputNode = ({ data, isConnectable }) => {
  const {isDarkMode} = useTheme();
  return (
    <div className="customNodeContainer">
      <div className="customNodeHeading">{data.label}</div>
      <div className={`customNodeContent ${isDarkMode ? "dark" : ""}`}>{data.value}</div>

      <Handle
        type="target"
        position={Position.Left}
        id="out"
        isConnectable={isConnectable}
        className="customHandle"
      />
    </div>
  );
};

export default CustomOutputNode;
