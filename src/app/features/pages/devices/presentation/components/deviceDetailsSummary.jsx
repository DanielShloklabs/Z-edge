import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/deviceDetailsSummaryStyle.css"
import formatCurrentDateTime from "../../../../../common/utils/formattedDateTime";

const DeviceDetailsSummary = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="deviceDetailsSummary">
      <div
        className={`deviceDetailsSummaryContent ${isDarkMode ? "dark" : ""}`}
      >
        <div className="deviceDetailsSummaryGroup">
          <div className="deviceDetailsSummaryLabel">Name :</div>
          <div className="deviceNetworkPropertyData">Device Name</div>
        </div>
        <div className="deviceDetailsSummaryGroup">
          <div className="deviceDetailsSummaryLabel">Device Network :</div>
          <div className="deviceDetailsSummaryData">Chiller Network</div>
        </div>
        <div className="deviceDetailsSummaryGroup">
          <div className="deviceDetailsSummaryLabel">Device Tags :</div>
          <div className="deviceDetailsSummaryData">Good</div>
        </div>
        <div className="deviceDetailsSummaryGroup">
          <div className="deviceDetailsSummaryLabel">Device Status :</div>
          <div className="deviceDetailsSummaryData">Active</div>
        </div>
        <div className="deviceDetailsSummaryGroup">
          <div className="deviceDetailsSummaryLabel">Network Health :</div>
          <div className="deviceDetailsSummaryData">Good</div>
        </div>
        <div className="deviceDetailsSummaryGroup">
          <div className="deviceDetailsSummaryLabel">Last Poll Time :</div>
          <div className="deviceDetailsSummaryData">{formatCurrentDateTime()}</div>
        </div>
      </div>
    </div>
  );
};

export default DeviceDetailsSummary;
