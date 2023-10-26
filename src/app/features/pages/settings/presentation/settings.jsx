import React from 'react';
import "../../../../common/styles/settingsStyle.css";
import { useTheme } from '../../../../common/theme/themeContext';
import SettingsNavigator from "./components/settingsNavigator";
import UserSettings from "./components/userSettings.jsx";
import RolesSettings from "./components/rolesSettings.jsx";
import ServicesSettings from "./components/servicesSettings.jsx"
import ConfigurationSettings from "./components/configurationSettings.jsx";
import BackupRestoreSettings from "./components/backupRestoreSettings.jsx";
import LicenseSettings from "./components/licenseSettings.jsx";

import { useState } from 'react';

const Settings = () => {
  const { isDarkMode } = useTheme();
  const [selectedOption, setSelectedOption] = useState("Users");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className={`settings ${isDarkMode ? "dark":""}`}>
      <SettingsNavigator onOptionClick={handleOptionClick} />
      {selectedOption === "Users" && <UserSettings />}
      {selectedOption === "Roles" && <RolesSettings />}
      {selectedOption === "Services" && <ServicesSettings />}
      {selectedOption === "Configuration" && <ConfigurationSettings />}
      {selectedOption === "BackupRestore" && <BackupRestoreSettings />}
      {selectedOption === "License" && <LicenseSettings />}
    </div>
  )
}

export default Settings