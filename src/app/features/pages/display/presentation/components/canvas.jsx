import React from "react";
import "../../../../../common/styles/canvasStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";

const Canvas = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`canvas ${isDarkMode ? "dark" : ""}`}>
      Canvas Component
    </div>
  );
};

export default Canvas;
