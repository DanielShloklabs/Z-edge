import React from 'react'
import { useTheme } from '../../../../../common/theme/themeContext';
import "../../../../../common/styles/deviceDetailsPropertiesStyle.css"
import formatCurrentDateTime from '../../../../../common/utils/formattedDateTime';

const DeviceDetailsProperties = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="deviceDetailsProperties">
      <div
        className={`deviceDetailsPropertiesContent ${isDarkMode ? "dark" : ""}`}
      >
        <div className="deviceDetailsPropertiesGroup">
          <div className="deviceDetailsPropertiesLabel">Name :</div>
          <div className="deviceDetailsPropertiesData">Device Name</div>
        </div>
        <div className="deviceDetailsPropertiesGroup">
          <div className="deviceDetailsPropertiesLabel">Device Network :</div>
          <div className="deviceDetailsPropertiesData">Chiller Network</div>
        </div>
        <div className="deviceDetailsPropertiesGroup">
          <div className="deviceDetailsPropertiesLabel">Device Tags :</div>
          <div className="deviceDetailsPropertiesData">Good</div>
        </div>
        <div className="deviceDetailsPropertiesGroup">
          <div className="deviceDetailsPropertiesLabel">Device Enable :</div>
          <div className="deviceDetailsPropertiesData"><input type='checkbox'/></div>
        </div>
        <div className="deviceDetailsPropertiesGroup">
          <div className="deviceDetailsPropertiesLabel">IP Address :</div>
          <div className="deviceDetailsPropertiesData">192.168.0.15</div>
        </div>
        <div className="deviceDetailsPropertiesGroup">
          <div className="deviceDetailsPropertiesLabel">Port Number :</div>
          <div className="deviceDetailsPropertiesData">47808</div>
        </div>
        <div className="deviceDetailsPropertiesGroup">
          <div className="deviceDetailsPropertiesLabel">Poll Frequency :</div>
          <div className="deviceDetailsPropertiesData">10 Sec</div>
        </div>
        <div className="deviceDetailsPropertiesGroup">
          <div className="deviceDetailsPropertiesLabel">Last Poll Time :</div>
          <div className="deviceDetailsPropertiesData">{formatCurrentDateTime()}</div>
        </div>
      </div>
    </div>
  )
}

export default DeviceDetailsProperties