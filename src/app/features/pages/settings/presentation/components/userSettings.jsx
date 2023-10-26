import React from "react";
import "../../../../../common/styles/userSettingsStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import UsersTable from "./usersTable.jsx";
import { AiOutlineUserAdd } from "react-icons/ai";

const UserSettings = () => {
  const { isDarkMode } = useTheme();
  const userName = ["admin", "guest", "Shloklabs"];
  const roles = ["Administrator", "User", "Manager"];
  const status = ["Active", "Inactive", "Active"];
  const lastAccess = ["2023-10-01", "2023-09-15", "2023-10-05"];
  return (
    <div className={`userSettings ${isDarkMode ? "dark" : ""}`}>
      <div className={`userSettingsHeader ${isDarkMode ? "dark" : ""}`}>
        User Configurations
      </div>
      <div className={`userSettingsContent ${isDarkMode ? "dark" : ""}`}>
        <div
          className={`userSettingsCreateBtn ${isDarkMode ? "dark" : ""}`}
          handleClick={() => {}}
        >
          <AiOutlineUserAdd size={20}/>
          Create User
        </div>
        <UsersTable
          userNames={userName}
          roles={roles}
          status={status}
          lastAccess={lastAccess}
        />
      </div>
    </div>
  );
};

export default UserSettings;
