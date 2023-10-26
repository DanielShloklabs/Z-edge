import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useMenu } from "../../../../../common/utils/menuContext";
import "../../../../../common/styles/constantBlockStyle.css";

const ConstantsBlock = ({ onDragConstantNodeStart, onDragOutputStart }) => {
  const { constantsBlockOpen } = useMenu();
  const { isDarkMode } = useTheme();
  return constantsBlockOpen ? (
    <div className={`constantBlock ${isDarkMode ? "dark" : ""}`}>
      <div className={`constantBlockHeader ${isDarkMode ? "dark" : ""}`}>
        Constant Blocks
      </div>
      <div className="constantBlockContent">
        <div className="constantBlocks">
          <div
            className="constantBlockOperator"
            draggable
            onDragStart={(e) => {
              onDragConstantNodeStart(e, "Analog");
            }}
          >
            Analog
          </div>
          <div
            className="constantBlockOperator"
            draggable
            onDragStart={(e) => {
              onDragConstantNodeStart(e, "Binary");
            }}
          >
            Binary
          </div>
          <div
            className="constantBlockOperator"
            draggable
            onDragStart={(e) => {
              onDragConstantNodeStart(e, "String");
            }}
          >
            String
          </div>
          <div
            className="constantBlockOperator"
            draggable
            onDragStart={(e) => {
              onDragOutputStart(e, "Output");
            }}
          >
            Output Node
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ConstantsBlock;
