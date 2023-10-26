
import React from 'react'
import "../../../../common/styles/devicesStyle.css"
import { useTheme } from '../../../../common/theme/themeContext';

const Devices = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`devices ${isDarkMode ? "dark":""}`}>Devices</div>
  )
}

export default Devices