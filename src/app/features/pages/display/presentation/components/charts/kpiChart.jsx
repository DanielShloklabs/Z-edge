import React, { useEffect, useRef, useState } from "react";
import "../../../../../../common/styles//kpiChartStyle.css";
import GaugeChart from "react-gauge-chart";
import { useTheme } from "../../../../../../common/theme/themeContext";

const KPIChart = ({ data, deviceList, view }) => {
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
      className={`kpiChart ${isDarkMode ? "dark" : ""}`}
      ref={chartContainerRef}
    >
      <p className="kpiLabel">Device 01</p>
      <div className="kpi">
        <GaugeChart
          nrOfLevels={20}
          percent={`0.15`}
          textColor={isDarkMode ? "white" : "black"}
          formatTextValue={({ value }) => `15°C`}
          animate={false}
        />
      </div>
    </div>
  );
};

export default KPIChart;
