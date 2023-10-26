import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useMenu } from "../../../../../common/utils/menuContext";
import "../../../../../common/styles/functionBlockStyle.css"

const FunctionBlock = () => {
  const { functionBlockOpen } = useMenu();
  const { isDarkMode } = useTheme();
  return functionBlockOpen ? (
    <div className={`functionBlock ${isDarkMode ? "dark" : ""}`}>
      <div className={`functionBlockHeader ${isDarkMode ? "dark" : ""}`}>
        Function Blocks
      </div>
      <div className="functionBlockContent">Function Block</div>
    </div>
  ) : null;
};

export default FunctionBlock;
