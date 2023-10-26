import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import { TiSpannerOutline } from "react-icons/ti";
import { IoKeyOutline } from "react-icons/io5";
import { LuDatabaseBackup } from "react-icons/lu";
import { RiUserSettingsLine } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import {MdOutlineMiscellaneousServices} from "react-icons/md"
import "../../../../../common/styles/settingsNavigatorStyle.css";
import { useState } from "react";

const SettingsNavigator = ({ onOptionClick }) => {
  const { isDarkMode } = useTheme();
  const [selectedOption, setSelectedOption] = useState("Users"); // Initialize with the default selected option

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onOptionClick(option);
  };

  return (
    <div className={`settingsNavigator ${isDarkMode ? "dark" : ""}`}>
      <div className={`settingsNavigatorHeader ${isDarkMode ? "dark" : ""}`}>
        Settings
      </div>
      <div className={`settingsNavigatorOptions  ${isDarkMode ? "dark" : ""}`}>
        <span
          className={`settingsNavigatorOption ${
            selectedOption === "Users" ? "selected" : ""
          } ${isDarkMode ? "dark" : ""}`}
          onClick={() => handleOptionClick("Users")}
        >
          <RiUserSettingsLine
            size={20}
            className="settingsNavigatorOptionIcon"
          />
          Users
        </span>
        <span
          className={`settingsNavigatorOption ${
            selectedOption === "Roles" ? "selected" : ""
          } ${isDarkMode ? "dark" : ""}`}
          onClick={() => handleOptionClick("Roles")}
        >
          <HiUserGroup size={20} className="settingsNavigatorOptionIcon" />
          Roles
        </span>
        <span
          className={`settingsNavigatorOption ${
            selectedOption === "Services" ? "selected" : ""
          } ${isDarkMode ? "dark" : ""}`}
          onClick={() => handleOptionClick("Services")}
        >
          <MdOutlineMiscellaneousServices size={20} className="settingsNavigatorOptionIcon" />
          Services
        </span>
        <span
          className={`settingsNavigatorOption ${
            selectedOption === "Configuration" ? "selected" : ""
          } ${isDarkMode ? "dark" : ""}`}
          onClick={() => handleOptionClick("Configuration")}
        >
          <TiSpannerOutline size={20} className="settingsNavigatorOptionIcon" />
          Configuration
        </span>
        <span
          className={`settingsNavigatorOption ${
            selectedOption === "BackupRestore" ? "selected" : ""
          } ${isDarkMode ? "dark" : ""}`}
          onClick={() => handleOptionClick("BackupRestore")}
        >
          <LuDatabaseBackup size={20} className="settingsNavigatorOptionIcon" />
          Backup & Restore
        </span>
        <span
          className={`settingsNavigatorOption ${
            selectedOption === "License" ? "selected" : ""
          } ${isDarkMode ? "dark" : ""}`}
          onClick={() => handleOptionClick("License")}
        >
          <IoKeyOutline size={20} className="settingsNavigatorOptionIcon" />
          License
        </span>
      </div>
    </div>
  );
};

export default SettingsNavigator;
