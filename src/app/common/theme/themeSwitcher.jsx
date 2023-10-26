import React from 'react'
import { useTheme } from './themeContext';
import { DarkModeSwitch } from 'react-toggle-dark-mode';


const ThemeSwitcher = () => {
    const { isDarkMode, toggleDarkMode } = useTheme();
    
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }   
  return (
    <DarkModeSwitch
      style={{ marginTop:'auto',marginBottom:'auto'}}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={29}
      sunColor="var(--primary-color)"
      moonColor="white"
    />
  )
}

export default ThemeSwitcher