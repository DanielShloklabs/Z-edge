import React from 'react'
import "../../../../../../common/styles/tableWidgetStyle.css"
import { useTheme } from '../../../../../../common/theme/themeContext'

const TableWidget = () => {
  const { isDarkMode} = useTheme();
  return (
    <div className={`tableWidget ${isDarkMode ? "dark" : ""}`}>Table Widget</div>
  )
}

export default TableWidget