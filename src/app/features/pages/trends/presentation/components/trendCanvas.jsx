import React from "react";
import { useTheme } from "../../../../../common/theme/themeContext";
import "../../../../../common/styles/trendCanvasStyle.css";
import TrendCanvasNavigator from "./trendCanvasNavigator.jsx";
import TrendCanvasTable from "./trendCanvasTable.jsx";
import TrendCanvasChart from "./trendCanvasChart";
import { useState } from "react";

const TrendCanvas = ({ object }) => {
  const { isDarkMode } = useTheme();
  const [selectedOption, setSelectedOption] = useState("Table");
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const timestamp = [
    "2023-10-01",
    "2023-09-15",
    "2023-10-05",
    "2023-10-01",
    "2023-09-15",
    "2023-10-05",
    "2023-10-01",
    "2023-09-15",
    "2023-10-05",
    "2023-10-01",
    "2023-09-15",
    "2023-10-05",
    "2023-10-01",
    "2023-09-15",
    "2023-10-05",
    "2023-10-01",
    "2023-09-15",
    "2023-10-05",
    "2023-10-01",
    "2023-09-15",
    "2023-10-05",
    "2023-10-01",
    "2023-09-15",
    "2023-10-05",
  ];
  const trendFlags = [
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
    "{}",
  ];
  const status = [
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
    "{ok}",
  ];
  const value = [
    "25.1 °C",
    "30.4 °C",
    "23.6 °C",
    "25.1 °C",
    "30.4 °C",
    "23.6 °C",
    "25.1 °C",
    "30.4 °C",
    "23.6 °C",
    "25.1 °C",
    "30.4 °C",
    "23.6 °C",
    "25.1 °C",
    "30.4 °C",
    "23.6 °C",
    "25.1 °C",
    "30.4 °C",
    "23.6 °C",
    "25.1 °C",
    "30.4 °C",
    "23.6 °C",
    "25.1 °C",
    "30.4 °C",
    "23.6 °C",
  ];
  const labels = [
    "2023-10-01",
    "2023-09-15",
    "2023-10-05",
    "2023-10-06",
    "2023-09-18",
    "2023-10-02",
    "2023-10-02",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "LineChart Demo",
        data: [23, 25, 12, 18, 32, 41, 12],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  return (
    <div className={`trendCanvas ${isDarkMode ? "dark" : ""}`}>
      <TrendCanvasNavigator onOptionClick={handleOptionClick} />
      <p>{object}</p>
      {selectedOption === "Table" && (
        <TrendCanvasTable
          timestamp={timestamp}
          trendFlags={trendFlags}
          status={status}
          value={value}
        />
      )}
      {selectedOption === "Chart" && (
        <TrendCanvasChart data={data} label="Temperature Data for 7 Days" />
      )}
    </div>
  );
};

export default TrendCanvas;
