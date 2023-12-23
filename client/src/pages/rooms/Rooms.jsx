import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate();

  // State variables for filtering
  const [minCapacity, setMinCapacity] = useState(0);
  const [maxRent, setMaxRent] = useState(Number.MAX_SAFE_INTEGER);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const {
    data: rooms,
    loading,
    error,
  } = useFetch("http://localhost:8000/rooms/");

  if (error) return <div>Some thing went wrong : {error}</div>;


  // Filtering logic
  const filteredRooms = rooms?.filter(
    (room) =>
      (!isFilterActive || (room.capacity >= minCapacity && room.rent <= maxRent))
  );

  const handleFilterApply = () => {
    setIsFilterActive(true);
  };

  const handleFilterReset = () => {
    setIsFilterActive(false);
    setMinCapacity(0);
    setMaxRent(Number.MAX_SAFE_INTEGER);
  };


  return (
    <div>
      <div className="page_header">
        <h1>Rooms</h1>
      </div>

      <div className="seperation_section">
        <button type="button" onClick={() => navigate("/rooms/add")}>
          Add Room
        </button>
        <hr />
      </div>

      <div className="filter_section">
        <label>Minimum Capacity:</label>
        <input
          type="number"
          value={minCapacity}
          onChange={(e) => setMinCapacity(parseInt(e.target.value, 10))}
        />

        <label>Maximum Rent:</label>
        <input
          type="number"
          value={maxRent}
          onChange={(e) => setMaxRent(parseInt(e.target.value, 10))}
        />

        <button onClick={handleFilterApply}>Apply Filters</button>
        <button onClick={handleFilterReset}>Reset Filters</button>
      </div>

      {/* <div className="items_list">
        <ul>
          {!loading &&
            rooms.map((room, index) => {
              return <li key={index} onClick={() => navigate(`/rooms/${room.id}`)}>Room Number : {room.room_number}</li>;
            })}
        </ul>
      </div> */}

      <div className="items_list">
        <ul>
          {!loading &&
            filteredRooms.map((room) => (
              <li key={room.id} onClick={() => navigate(`/rooms/${room.id}`)}>
                Room Number: {room.room_number}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default Rooms;
