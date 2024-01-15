import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import baseurl from "../../config";
import useFetch from "../../hooks/useFetch";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
} from "chart.js";

import React from "react";

ChartJS.register(
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale
)

const BillChart = ({ title }) => {
  const {
    data: bills,
    loading,
    error,
  } = useFetch(`${baseurl}/payments/bills/`);

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{}],
  });

  useEffect(() => {
    if (bills) {
      // Extract unique categories
      const categories = Array.from(
        new Set(bills.map((bill) => bill.bill_type))
      );

      // Create datasets for each category
      const datasets = categories.map((category) => {
        const dataPoints = bills
          .filter((bill) => bill.bill_type === category)
          .map((bill) => bill.amount);

        return {
          label: category,
          data: dataPoints,
        };
      });
      // Extract unique dates
      const dates = Array.from(new Set(bills.map((bill) => bill.bill_date)));

      setChartData({
        labels: dates,
        datasets: datasets,
      });
    }
  }, [bills]);

const options = {
  scales: {
    y: {
      beginAtZero: true,
      suggestedMax: 20000,  // Set the maximum value for Y-axis
      suggestedMin: 0,      // Set the minimum value for Y-axis
      stepSize: 2000,       // Set the step size (interval) for Y-axis
    },
  },
};


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="chart">
      <div className="header">
        <h1>{title}</h1>
      </div>

      <div className="chart_visuals">
        <div className="chart_diagram">
          {chartData && <Line data={chartData} options={options} id="bill-chart" />}
        </div>
      </div>
    </div>
  );
};

export default BillChart;
