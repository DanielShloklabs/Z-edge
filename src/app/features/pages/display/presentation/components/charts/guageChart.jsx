/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import GaugeChart from "react-gauge-chart";
import "../../../../../../common/styles/guageChartStyle.css";
import { useTheme } from "../../../../../../common/theme/themeContext";

const GuageChart = () => {
  const chartContainerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);
  const { isDarkMode } = useTheme();

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
    <div
      className={`guageChart ${isDarkMode ? "dark" : ""}`}
      ref={chartContainerRef}
    >
      <p className="guageLabel">Set Temperature</p>
      <div className="guage">
        <GaugeChart
          nrOfLevels={3}
          arcsLength={[0.3, 0.5, 0.2]}
          colors={["#2CABE1", "#F57C19", "#EA286F"]}
          percent={0.8}
          formatTextValue={({ value }) => `80°C`}
          textColor={`${isDarkMode ? "white" : "black"}`}
          arcPadding={0.02}
          animate={false}
          style={{ width: chartWidth, height: "100%" }}
        />
      </div>
    </div>
  );
};

export default GuageChart;
