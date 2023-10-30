/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "../../../../../../common/styles/lineChartStyle.css";
import { Line } from "react-chartjs-2";
import { useTheme } from "../../../../../../common/theme/themeContext";

const LineChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "LineChart Demo",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };
  const { isDarkMode } = useTheme();

  return (
    <div className={`lineChart ${isDarkMode ? "dark" : ""}`}>
      <p className="lineLabel">Data for 10 Days</p>
      <Line className="chart" data={data} />
    </div>
  );
};

export default LineChart;
