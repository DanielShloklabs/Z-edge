import React from "react";
import "../../../../../common/styles/logicBlockStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useMenu } from "../../../../../common/utils/menuContext";

const LogicBlock = ({ onDragOperatorStart }) => {
  const { logicBlockOpen } = useMenu();
  const { isDarkMode } = useTheme();
  return logicBlockOpen ? (
    <div className={`logicBlock ${isDarkMode ? "dark" : ""}`}>
      <div className={`logicBlockHeader ${isDarkMode ? "dark" : ""}`}>
        Logic Blocks
      </div>
      <div className="logicBlockContent">
        <div className="logicBlocks">
          <div
            className="logicBlockOperator"
            draggable
            onDragStart={(e) => onDragOperatorStart(e, "AND")}
          >
            AND
          </div>
          <div
            className="logicBlockOperator"
            draggable
            onDragStart={(e) => onDragOperatorStart(e, "OR")}
          >
            OR
          </div>
          <div
            className="logicBlockOperator"
            draggable
            onDragStart={(e) => onDragOperatorStart(e, "XOR")}
          >
            XOR
          </div>
          <div
            className="logicBlockOperator"
            draggable
            onDragStart={(e) => onDragOperatorStart(e, "NOT")}
          >
            NOT
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default LogicBlock;
