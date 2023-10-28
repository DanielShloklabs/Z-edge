import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/pointsDetailsPropertiesStyle.css"

const PointDetailsProperties = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="pointsDetailsProperties">
      <div
        className={`pointsDetailsPropertiesContent ${isDarkMode ? "dark" : ""}`}
      >
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">Point Name :</div>
          <div className="pointsDetailsPropertiesData">Point Name</div>
        </div>
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">Point Description :</div>
          <div className="pointsDetailsPropertiesData">
            Chiller Supply temperature
          </div>
        </div>
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">Point Tags :</div>
          <div className="pointsDetailsPropertiesData">Tags</div>
        </div>
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">
            Point Characteristics :
          </div>
          <div className="pointsDetailsPropertiesData">20k NTC, Thermistor</div>
        </div>
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">Point Enable :</div>
          <div className="pointsDetailsPropertiesData">
            <input type="checkbox" />
          </div>
        </div>
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">Point Address :</div>
          <div className="pointsDetailsPropertiesData">40010</div>
        </div>
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">Register Type :</div>
          <div className="pointsDetailsPropertiesData">Holding Register</div>
        </div>
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">Data Type :</div>
          <div className="pointsDetailsPropertiesData">
            Integer, Float, Double
          </div>
        </div>
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">Data Offset :</div>
          <div className="pointsDetailsPropertiesData">2</div>
        </div>
        <div className="pointsDetailsPropertiesGroup">
          <div className="pointsDetailsPropertiesLabel">Poll Frequency :</div>
          <div className="pointsDetailsPropertiesData">10 Sec</div>
        </div>
      </div>
    </div>
  );
};

export default PointDetailsProperties;
