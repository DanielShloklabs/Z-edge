import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/backupRestoreSettingsStyle.css";
import BackupRestore from "./backupRestore.jsx";
import { GoDotFill } from "react-icons/go";
import formatCurrentDateTime from "../../../../../common/utils/formattedDateTime";

const BackupRestoreSettings = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`backupRestoreSettings ${isDarkMode ? "dark" : ""}`}>
      <div
        className={`backupRestoreSettingsHeader ${isDarkMode ? "dark" : ""}`}
      >
        Backup & Restore Configurations
      </div>
      <div className="backupRestoreSettingsContent">
        <div
          className={`backupRestoreSettingsData ${isDarkMode ? "dark" : ""}`}
        >
          <BackupRestore
            configType="Local Config Backup"
            handleBackupClick={() => {}}
            handleRestoreClick={() => {}}
          />
          <BackupRestore
            configType="Cloud Config Backup"
            handleBackupClick={() => {}}
            handleRestoreClick={() => {}}
          />
          <div className="backupRestoreLastBackupTime">
            <p>Last Backup Time</p>
            <p>{formatCurrentDateTime()}</p>
          </div>
          <div className="backupRestoreLastBackupStatus">
            <p className="backupRestoreStatusLabel">Last Backup Status</p>
            <p>
              <GoDotFill size="20" className="backupRestoreStatusDot" />
            </p>
            <p>Success</p>
            <p>Local</p>
          </div>
        </div>
        <div
          className={`backupRestoreSettingsData ${isDarkMode ? "dark" : ""}`}
        >
          <BackupRestore
            configType="Local Data Backup"
            handleBackupClick={() => {}}
            handleRestoreClick={() => {}}
          />
          <BackupRestore
            configType="Cloud Data Backup"
            handleBackupClick={() => {}}
            handleRestoreClick={() => {}}
          />
          <div className="backupRestoreLastBackupTime">
            <p>Last Backup Time</p>
            <p>{formatCurrentDateTime()}</p>
          </div>
          <div className="backupRestoreLastBackupStatus">
            <p className="backupRestoreStatusLabel">Last Backup Status</p>
            <p>
              <GoDotFill size="20" className="backupRestoreStatusDot" />
            </p>
            <p>Success</p>
            <p>Local</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackupRestoreSettings;
