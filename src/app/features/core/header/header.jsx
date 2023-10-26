import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "../../../common/styles/headerStyles.css";
import { useTheme } from "../../../common/theme/themeContext";
import ThemeSwitcher from "../../../common/theme/themeSwitcher";
import SearchInput from "./components/searchInput";

const Header = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="header">
      <div className="header-logo">
        <div className={`logo ${isDarkMode ? "dark" : ""}`}>
          <div className={`logoStart ${isDarkMode ? "dark" : ""}`}>Z</div>
          <div className={`logoEnd ${isDarkMode ? "dark" : ""}`}>EDGE</div>
        </div>
      </div>
      <div className="search">
        <div className={`searchBox ${isDarkMode ? "dark" : ""}`}>
          <SearchIcon className="searchIcon" />
          <SearchInput
            className={`searchInput ${isDarkMode ? "dark" : ""}`}
            type="text"
            placeholder="Search..."
            handleChange={() => {}}
          />
        </div>
      </div>
      <div className="header-profile-section">
        <ThemeSwitcher />
        <div className="header-profile">
          <p className={`profileName ${isDarkMode ? "dark" : ""}`}>
            Shlok Admin
          </p>
          <AccountCircleIcon
            fontSize="large"
            className={`profileIcon ${isDarkMode ? "dark" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
