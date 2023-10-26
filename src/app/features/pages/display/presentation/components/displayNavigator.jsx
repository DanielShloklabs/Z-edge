import React from "react";
import "../../../../../common/styles/displayNavigatorStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import { useMenu } from "../../../../../common/utils/menuContext";

const DisplayNavigator = ({ list }) => {
  const { isDarkMode } = useTheme();
  const { open } = useMenu();
  return open ? (
    <div className={`displayNavigator ${isDarkMode ? "dark" : ""}`}>
      <div className={`displayNavigatorHeader ${isDarkMode ? "dark" : ""}`}>
        Display Navigator
      </div>
      <div className="displayNavigatorContent">
        {list.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </div>
    </div>
  ) : null;
};

export default DisplayNavigator;
