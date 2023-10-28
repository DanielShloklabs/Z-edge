import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import formatCurrentDateTime from "../../../../../common/utils/formattedDateTime";
import "../../../../../common/styles/pointsDetailsSummaryStyle.css"

const PointsDetailsSummary = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="pointsDetailsSummary">
      <div
        className={`pointsDetailsSummaryContent ${isDarkMode ? "dark" : ""}`}
      >
        <div className="pointsDetailsSummaryGroup">
          <div className="pointsDetailsSummaryLabel">Point Name :</div>
          <div className="deviceNetworkPropertyData">Point Name</div>
        </div>
        <div className="pointsDetailsSummaryGroup">
          <div className="pointsDetailsSummaryLabel">Point Description :</div>
          <div className="pointsDetailsSummaryData">
            Chiller Supply temperature
          </div>
        </div>
        <div className="pointsDetailsSummaryGroup">
          <div className="pointsDetailsSummaryLabel">Point Units :</div>
        <div className="pointsDetailsSummaryData">Degree Celsius</div>
        </div>
        <div className="pointsDetailsSummaryGroup">
          <div className="pointsDetailsSummaryLabel">
            Point Characteristics :
          </div>
          <div className="pointsDetailsSummaryData">20k NTC, Thermistor</div>
        </div>
        <div className="pointsDetailsSummaryGroup">
          <div className="pointsDetailsSummaryLabel">Point Status :</div>
          <div className="pointsDetailsSummaryData">Active</div>
        </div>
        <div className="pointsDetailsSummaryGroup">
          <div className="pointsDetailsSummaryLabel">Last Poll Time :</div>
          <div className="pointsDetailsSummaryData">{formatCurrentDateTime()}</div>
        </div>
      </div>
    </div>
  );
};

export default PointsDetailsSummary;
