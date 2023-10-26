import React from "react";
import "../../../../../common/styles/commonNodeStyle.css";
import { Handle, Position } from "reactflow";
import { BsPencilSquare } from "react-icons/bs";
import { BiDuplicate } from "react-icons/bi";
import { useTheme } from "../../../../../common/theme/themeContext";

const CustomConstantNode = ({
  data,
  isConnectable,
  onDoubleClick,
  handleEditClick,
  handleDuplicateClick,
  newNodeId,
}) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`customNodeContainer ${isDarkMode ? "dark" : ""}`}>
      <div className="customNodeHeading">
        {data.label}
        <div className="customConstantNode">
          <span
            className="customConstantNodeBtn"
            onClick={data.handleEditClick}
          >
            <BsPencilSquare className="img-btn" color="#FFFFFF" size={12} />
          </span>
          <span
            className="customConstantNodeBtn"
            onClick={data.handleDuplicateClick}
          >
            <BiDuplicate className="img-btn" color="#FFFFFF" size={12} />
          </span>
        </div>
      </div>

      <div className={`customInputNodeContent ${isDarkMode ? "dark" : ""}`}>
        <b>Value:</b> {data.value}
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id={data.label}
        isConnectable={data.isConnectable}
        className="customHandle"
      />
    </div>
  );
};

export default CustomConstantNode;
