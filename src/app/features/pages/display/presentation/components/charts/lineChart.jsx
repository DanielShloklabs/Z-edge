import React from "react";
import "../../../../../../common/styles/lineChartStyle.css";
import { Line } from "react-chartjs-2";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

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
    <div className="lineChart" ref={chartContainerRef}>
      <p className="lineLabel">Data for 10 Days</p>
      <div className="line">
        <Line data={data} />
      </div>
    </div>
  );
};

export default LineChart;
