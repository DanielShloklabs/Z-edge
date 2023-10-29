import React from "react";
import "../../../../../common/styles/widgetsStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useMenu } from "../../../../../common/utils/menuContext";

const Widgets = ({ handleDragStartWidgetContainer, Dashboardwidgets }) => {
  const { isDarkMode } = useTheme();
  const { widgetOpen } = useMenu();

  return widgetOpen ? (
    <div className={`widgets ${isDarkMode ? "dark" : ""}`}>
      <div className={`widgetsHeader ${isDarkMode ? "dark" : ""}`}>
        Display Widgets
      </div>
      <div className="widgetsContent">
        {Dashboardwidgets?.map((widget, index) => (
          <div
            className={`widget ${isDarkMode ? "dark" : ""}`}
            key={index}
            draggable
            onDragStart={(e) => handleDragStartWidgetContainer(e, widget)}
          >
            {React.createElement(widget.icon, {
              className: `widgetIcon`,
              size: 40,
              color: `${isDarkMode ? "#fff" : "#000"} `,
            })}
            <p>{widget.label}</p>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default Widgets;
