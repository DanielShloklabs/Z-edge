import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/pointDetailsTrendsStyle.css"

const PointDetailsTrends = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`pointDetailsTrendsContent ${isDarkMode ? "dark" : ""}`}
    >
      <div className="pointDetailsTrendsGroup">
        <div className="pointDetailsTrendsLabel">Trend Enable:</div>
        <input
          className="pointDetailsTrendsData"
          type="checkbox"
          checked
        />
      </div>
      <div className="pointDetailsTrendsGroup">
        <div className="pointDetailsTrendsLabel">Trend Interval:</div>
        <input
          className="pointDetailsTrendsData"
          type="time"
          name="n1IP"
          placeholder="26"
        />
      </div>
      <div className="pointDetailsTrendsGroup">
        <div className="pointDetailsTrendsLabel">Last Received Data:</div>
        <input
          className="pointDetailsTrendsData"
          type="text"
          name="n1IP"
        />
      </div>
      
      <div className="pointDetailsTrendsGroup">
        <div className="pointDetailsTrendsLabel">
          Record Count:
        </div>
        <input
          className="pointDetailsTrendsData"
          type="text"
          placeholder="500"
        />
      </div>
      <div className="pointDetailsTrendsGroup">
        <div className="pointDetailsTrendsLabel">
         Trend Active Calculator:
        </div>
        <input
          className="pointDetailsTrendsData"
          type="text"
        />
      </div>
    </div>
  );
};

export default PointDetailsTrends;
