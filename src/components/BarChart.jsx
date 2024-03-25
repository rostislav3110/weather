import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar} from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const data = {
  labels: "Balance",
  datasets: [
    {
      label: "balance",
      data: "data1",
      backgroundColor: "lightBlue",
      borderColor: "transparent",
      borderRadius: "5",
      hoverBackgroundColor: "#5932EA",
      hoverOffset: 44,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    x: { beginAtZero: true, grid: { display: false } },
    y: { beginAtZero: true, grid: { display: false }, display: false },
  },
};

function BarChart() {
  return (
    <div style={{marginLeft: "30px"}}>
        <Bar data={data} options={options}></Bar>
    </div>
  )
}

export default BarChart