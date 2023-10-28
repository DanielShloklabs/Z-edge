import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/pointDetailsAlarmsStyle.css"

const PointDetailsAlarms = () => {
  const { isDarkMode } = useTheme();
  return (
    <div
      className={`pointDetailsAlarmsContent ${isDarkMode ? "dark" : ""}`}
    >
      <div className="pointDetailsAlarmsGroup">
        <div className="pointDetailsAlarmsLabel">Alarm Enable:</div>
        <input
          className="pointDetailsAlarmsData"
          type="checkbox"
          checked
        />
      </div>
      <div className="pointDetailsAlarmsGroup">
        <div className="pointDetailsAlarmsLabel">Alarm High Limit:</div>
        <input
          className="pointDetailsAlarmsData"
          type="text"
          name="n1IP"
          placeholder="26"
        />
      </div>
      <div className="pointDetailsAlarmsGroup">
        <div className="pointDetailsAlarmsLabel">Alarm Low Limit:</div>
        <input
          className="pointDetailsAlarmsData"
          type="text"
          name="n1IP"
          placeholder="18"
        />
      </div>
      <div className="pointDetailsAlarmsGroup">
        <div className="pointDetailsAlarmsLabel">
          Alarm High Limit Enable:
        </div>
        <input
          className="pointDetailsAlarmsData"
          type="checkbox"
          checked
        />
      </div>
      <div className="pointDetailsAlarmsGroup">
        <div className="pointDetailsAlarmsLabel">
          Alarm Low Limit Enable:
        </div>
        <input
          className="pointDetailsAlarmsData"
          type="checkbox"  
          checked
        />
      </div>
      <div className="pointDetailsAlarmsGroup">
        <div className="pointDetailsAlarmsLabel">
          Alarm High Limit Message:
        </div>
        <input
          className="pointDetailsAlarmsData"
          type="text"
          placeholder="High Temperature"
        />
      </div>
      <div className="pointDetailsAlarmsGroup">
        <div className="pointDetailsAlarmsLabel">
          Alarm Low Limit Message:
        </div>
        <input
          className="pointDetailsAlarmsData"
          type="text"
          placeholder="Low Temperature"
        />
      </div>
    </div>
  );
};

export default PointDetailsAlarms;
