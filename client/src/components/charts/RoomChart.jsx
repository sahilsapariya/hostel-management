import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="chart">
      <div className="header">
        <h1>{title}</h1>
      </div>

      <div className="chart_visuals">
        <div className="chart_diagram">
          {roomOccupancyData && <Pie data={roomOccupancyData} />}
        </div>
      </div>
    </div>
  );
};

export default RoomChart;
