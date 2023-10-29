import React from "react";
import "../../../../../common/styles/displayNavigatorStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useMenu } from "../../../../../common/utils/menuContext";

const DisplayNavigator = ({ dashboards, handleLoadDashboard }) => {
  const { isDarkMode } = useTheme();
  const { open } = useMenu();
  return open ? (
    <div className={`displayNavigator ${isDarkMode ? "dark" : ""}`}>
      <div className={`displayNavigatorHeader ${isDarkMode ? "dark" : ""}`}>
        Display Navigator
      </div>
      <div className="displayNavigatorContent">
        {dashboards.map((dashboard, index) => (
          <li
            key={`dashboard-${index}`}
            id={`${dashboard.name}-page`}
            onClick={() => handleLoadDashboard(dashboard)}
          >
            {dashboard.name}
          </li>
        ))}
      </div>
    </div>
  ) : null;
};

export default DisplayNavigator;
