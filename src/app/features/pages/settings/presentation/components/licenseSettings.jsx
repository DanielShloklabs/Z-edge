import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/licenseSettingsStyle.css";
import { GoDotFill } from "react-icons/go";

const LicenseSettings = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`licenseSettings ${isDarkMode ? "dark" : ""}`}>
      <div className={`licenseSettingsHeader ${isDarkMode ? "dark" : ""}`}>
        Backup & Restore Configurations
      </div>
      <div className="licenseSettingsContent">
        <div className="licenseSettingsGroup">
          <p className="label">Host ID :</p>
          <p className="data">XYX-XYZ-XYZ-XYZ</p>
        </div>
        <div className="licenseSettingsGroup">
          <p className="label">License Status :</p>
          <p className="data">
            <GoDotFill className="licenseSettingsStatusDot" size="20" />
            Active
          </p>
        </div>
        <div className="licenseSettingsGroup">
          <p className="label">License Type :</p>
          <p className="data">Perpetual</p>
        </div>
        <div className="licenseSettingsGroup">
          <p className="label">License Validity :</p>
          <p className="data">{Date.now()}</p>
        </div>
        <div className="licenseSettingsGroup">
          <p className="label">License Details :</p>
          <p className={`data licenseSettingsDetails ${isDarkMode ? "dark" : ""}`}>Some Random Details</p>
        </div>
      </div>
    </div>
  );
};

export default LicenseSettings;
