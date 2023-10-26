import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/rolesSettingsStyle.css";
import Role from "./role.jsx";

const RolesSettings = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`rolesSettings ${isDarkMode ? "dark" : ""}`}>
      <div className={`rolesSettingsHeader ${isDarkMode ? "dark" : ""}`}>
        Roles Configurations
      </div>
      <div className="rolesSettingsContent">
        <div className="rolesSettingsRolesHeading">
          <p className="rolesSettingsRolesHeadingRoleName">Role Name</p>
          <p>Display</p>
          <p>Devices</p>
          <p>Events</p>
          <p>Rules</p>
          <p>Settings</p>
        </div>
        <div
          className={`rolesSettingsRolesReadWrite ${isDarkMode ? "dark" : ""}`}
        >
          <p>RW</p>
          <p>RW</p>
          <p>RW</p>
          <p>RW</p>
          <p>RW</p>
        </div>
        <Role roleName="Administrator" />
        <Role roleName="Manager" />
        <Role roleName="Engineer" />
        <Role roleName="Operator" />
      </div>
    </div>
  );
};

export default RolesSettings;
