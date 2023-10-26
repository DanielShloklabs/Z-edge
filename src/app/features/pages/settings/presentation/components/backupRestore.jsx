import React from "react";
import "../../../../../common/styles/backupRestoreStyle.css"

const BackupRestore = ({ configType,handleBackupClick, handleRestoreClick }) => {
  return (
    <div className="backupRestore">
      <div className="backupRestoreConfig">
        {configType}
        <div className="backupRestoreConfigBtns">
          <div className="backupRestoreConfigBtn" onClick={handleBackupClick}>Backup</div>
          <div className="backupRestoreConfigBtn" onClick={handleRestoreClick}>Restore</div>
        </div>
      </div>
    </div>
  );
};

export default BackupRestore;
