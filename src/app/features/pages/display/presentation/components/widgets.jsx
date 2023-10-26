import React from "react";
import "../../../../../common/styles/widgetsStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useMenu } from "../../../../../common/utils/menuContext";

const Widgets = () => {
  const { isDarkMode } = useTheme();
  const { widgetOpen } = useMenu();
  return widgetOpen ? (
    <div className={`widgets ${isDarkMode ? "dark" : ""}`}>
      <div className={`widgetsHeader ${isDarkMode ? "dark" : ""}`}>
        Display Widgets
      </div>
      <div className="widgetsContent">Widgets Pane</div>
    </div>
  ) : null;
};

export default Widgets;
