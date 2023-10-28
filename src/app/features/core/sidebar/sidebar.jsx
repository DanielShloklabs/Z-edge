import AccessAlarmsTwoToneIcon from "@mui/icons-material/AccessAlarmsTwoTone";
import AccountTreeTwoToneIcon from "@mui/icons-material/AccountTreeTwoTone";
import DashboardTwoToneIcon from "@mui/icons-material/DashboardTwoTone";
import EdgesensorHighTwoToneIcon from "@mui/icons-material/EdgesensorHighTwoTone";
import EventNoteTwoToneIcon from "@mui/icons-material/EventNoteTwoTone";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import React from "react";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import "../../../common/styles/sidebarStyle.css";
import { useTheme } from "../../../common/theme/themeContext";
import { Link, useLocation } from "react-router-dom";
import { useMenu } from "../../../common/utils/menuContext";

const SideNav = () => {
  const location = useLocation();
  const { isDarkMode } = useTheme();
  const { setOpen } = useMenu();
  
  const isActiveLink = (path) => {
    return location.pathname === path ? "selected" : "";
  };
  return (
    <Sidebar className="sidenav">
      <Menu className={`sidenavMenu ${isDarkMode ? "dark" : ""}`}>
        <MenuRoundedIcon
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          className="sidenavMenuIndicator"
        />
        <MenuItem className={`sidenavMenuItem ${isDarkMode ? "dark" : ""}`}>
          <Link to="/">
            <DashboardTwoToneIcon
              className={`sidenavMenuIcon ${
                isDarkMode ? "dark" : ""
              } ${isActiveLink("/")}`}
            />
          </Link>
        </MenuItem>
        <p className="sidenavMenuText">Display</p>
        <MenuItem className={`sidenavMenuItem ${isDarkMode ? "dark" : ""}`}>
          <Link to="/devices">
            <EdgesensorHighTwoToneIcon
              className={`sidenavMenuIcon ${
                isDarkMode ? "dark" : ""
              } ${isActiveLink("/devices")}`}
            />
          </Link>
        </MenuItem>
        <p className="sidenavMenuText">Devices</p>
        <MenuItem className={`sidenavMenuItem ${isDarkMode ? "dark" : ""}`}>
          <Link to="/alarms">
            <AccessAlarmsTwoToneIcon
              className={`sidenavMenuIcon ${
                isDarkMode ? "dark" : ""
              } ${isActiveLink("/alarms")}`}
            />
          </Link>
        </MenuItem>
        <p className="sidenavMenuText">Alarms</p>

        <MenuItem className={`sidenavMenuItem ${isDarkMode ? "dark" : ""}`}>
          <Link to="/trends">
            <EventNoteTwoToneIcon
              className={`sidenavMenuIcon ${
                isDarkMode ? "dark" : ""
              } ${isActiveLink("/trends")}`}
            />
          </Link>
        </MenuItem>
        <p className="sidenavMenuText">Trends</p>
        <MenuItem className={`sidenavMenuItem ${isDarkMode ? "dark" : ""}`}>
          <Link to="/rules">
            <AccountTreeTwoToneIcon
              className={`sidenavMenuIcon ${
                isDarkMode ? "dark" : ""
              } ${isActiveLink("/rules")}`}
            />
          </Link>
        </MenuItem>
        <p className="sidenavMenuText">Rules</p>

        <MenuItem className={`sidenavMenuItem ${isDarkMode ? "dark" : ""}`}>
          <Link to="/schedule">
            <CalendarMonthIcon
              className={`sidenavMenuIcon ${
                isDarkMode ? "dark" : ""
              } ${isActiveLink("/schedule")}`}
            />
          </Link>
        </MenuItem>
        <p className="sidenavMenuText long">Schedule</p>

        <Link to="/settings" style={{ color: "var(--font-color)" }}>
          <SettingsIcon
            className={`sidenavMenuBottomIcon ${
              isDarkMode ? "dark" : ""
            } ${isActiveLink("/settings")}`}
          />
        </Link>
      </Menu>
    </Sidebar>
  );
};

export default SideNav;
