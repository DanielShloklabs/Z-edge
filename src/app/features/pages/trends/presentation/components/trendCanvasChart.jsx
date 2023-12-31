
import "../../../../../common/styles/trendCanvasChartStyle.css"
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [23, 25, 12, 18, 32, 41, 12],
//       borderColor: 'rgb(255, 99, 132)',
//       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//     },
//   ],
// };
const TrendCanvasChart = ({data, label}) => {
  

  return (
    <div className="trendCanvasChart">
      <p className="trendCanvasChartLabel">{label}</p>
      <Line data={data} className="trendCanvasChartLine"/>
    </div>
  );
};

export default TrendCanvasChart;
