import React from "react";
import "../../../../../../common/styles/pieChartStyle.css";
import { Pie } from "react-chartjs-2";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "PieChart Demo",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
const PieChart = () => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        if (entry.contentBoxSize) {
          setChartWidth(entry.contentBoxSize[0].inlineSize);
        } else {
          setChartWidth(entry.contentRect.width);
        }
      }
    });

    if (chartContainerRef.current) {
      resizeObserver.observe(chartContainerRef.current);
    }

    return () => {
      if (chartContainerRef.current) {
        resizeObserver.unobserve(chartContainerRef.current);
      }
    };
  }, []);
  return (
    <div className="pieChart" ref={chartContainerRef}>
      <p className="pieLabel">Demo Pie Chart</p>
      <div className="pie">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default PieChart;
