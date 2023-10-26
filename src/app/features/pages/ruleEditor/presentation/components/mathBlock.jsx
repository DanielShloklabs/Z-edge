import React from "react";
import { useMenu } from "../../../../../common/utils/menuContext";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/mathBlockStyle.css";

const MathBlock = ({ onDragAdd4OperatorStart, onDragOperatorStart }) => {
  const { mathBlockOpen } = useMenu();
  const { isDarkMode } = useTheme();
  return mathBlockOpen ? (
    <div className={`mathBlock ${isDarkMode ? "dark" : ""}`}>
      <div className={`mathBlockHeader ${isDarkMode ? "dark" : ""}`}>
        Math Blocks
      </div>
      <div className="mathBlockContent">
        <div className="mathBlocks">
          <div
            className="mathBlockOperator"
            draggable
            onDragStart={(e) => onDragOperatorStart(e, "Add")}
          >
            Addition
          </div>
          <div
            className="mathBlockOperator"
            draggable
            onDragStart={(e) => onDragOperatorStart(e, "Subtract")}
          >
            Subtraction
          </div>
          <div
            className="mathBlockOperator"
            draggable
            onDragStart={(e) => onDragOperatorStart(e, "Multiply")}
          >
            Multiplication
          </div>
          <div
            className="mathBlockOperator"
            draggable
            onDragStart={(e) => onDragOperatorStart(e, "Divide")}
          >
            Division
          </div>
          <div
            className="mathBlockOperator"
            draggable
            onDragStart={(e) => onDragAdd4OperatorStart(e, "Add4")}
          >
            Add 4
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default MathBlock;
