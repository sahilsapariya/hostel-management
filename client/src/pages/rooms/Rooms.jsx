import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import baseurl from "../../config";

import AddIcon from "../../assets/icons/addnormal.svg";
import AddIconHover from "../../assets/icons/add.svg";

const Rooms = () => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconSource = isHovered ? AddIconHover : AddIcon;

  // State variables for filtering
  const [minCapacity, setMinCapacity] = useState(0);
  const [maxRent, setMaxRent] = useState(Number.MAX_SAFE_INTEGER);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const { data: rooms, loading, error } = useFetch(`${baseurl}/rooms/`);

  if (error) return <div>Some thing went wrong : {error}</div>;

  // Filtering logic
  const filteredRooms = rooms?.filter(
    (room) =>
      !isFilterActive || (room.capacity >= minCapacity && room.rent <= maxRent)
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
    <div className="room__container">
      <div className="profile_header">
        <h1>Rooms</h1>
        <img
          src={iconSource}
          alt={`add bill`}
          title={`Add bill`}
          onClick={() => navigate(`/rooms/add`)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      <div className="filter_section">
        <div className="inputs">
          <div className="input">
            <label>Minimum Capacity</label>
            <input
              type="number"
              value={minCapacity}
              onChange={(e) => setMinCapacity(parseInt(e.target.value, 10))}
            />
          </div>

          <div className="input">
            <label>Maximum Rent</label>
            <input
              type="number"
              value={maxRent}
              onChange={(e) => setMaxRent(parseInt(e.target.value, 10))}
            />
          </div>
        </div>

        <div className="buttons">
          <button onClick={handleFilterApply}>Apply Filters</button>
          <button onClick={handleFilterReset}>Reset Filters</button>
        </div>
      </div>

      <table className="table__container">
        <colgroup>
          <col style={{ width: "50px" }} />
          <col style={{ width: "calc(100% - 175px)" }} />
          <col style={{ width: "125px" }} />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Room Number</th>
            <th>Availibility</th>
          </tr>
        </thead>

        <tbody>
          {!loading &&
            filteredRooms?.map((room, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td onClick={() => navigate(`/rooms/${room.id}`)}>
                    {room.room_number}
                  </td>
                  <td>
                    {room.students.length >= room.capacity
                      ? "Full"
                      : room.capacity - room.students.length}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Rooms;
