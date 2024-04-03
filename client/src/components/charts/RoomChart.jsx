import React, { useEffect, useRef, useState } from "react";

import { Chart } from "chart.js/auto";
import baseurl from "../../config";
import useFetch from "../../hooks/useFetch";

const RoomChart = ({ title }) => {
  const { data: rooms, loading, error } = useFetch(`${baseurl}/rooms/`);

  const [totalStudents, setTotalStudents] = useState(0);
  const [availibility, setAvailability] = useState(0);
  const [roomOccupancyData, setRoomOccupancyData] = useState(null);

  useEffect(() => {
    if (rooms) {
      const capacity = rooms.reduce((acc, room) => acc + room.capacity, 0);
      const students = rooms.reduce(
        (acc, room) => acc + room.students.length,
        0
      );
      const availability = capacity - students;

      setTotalStudents(students);
      setAvailability(availability);
      setRoomOccupancyData({
        labels: ["Available space", "Space occupied"],
        datasets: [
          {
            data: [availibility, totalStudents],
            backgroundColor: ["green", "red"],
          },
        ],
      });
    }
  }, [rooms]);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="chart">
      <div className="header">
        <h1>{title}</h1>
      </div>

      <div className="chart_visuals">
        <div className="chart_diagram">
          {roomOccupancyData && (
            <PieChart
              labels={roomOccupancyData.labels}
              datasets={roomOccupancyData.datasets}
            />
          )}
        </div>
      </div>
    </div>
  );
};

const PieChart = ({ labels, datasets }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: labels,
        datasets: datasets,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [datasets]);
  return (
    <div className="pie_chart">
      <canvas ref={chartRef} width={350} height={350}></canvas>
    </div>
  );
};

export default RoomChart;
