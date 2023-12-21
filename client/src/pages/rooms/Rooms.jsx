import React from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const Rooms = () => {
  const navigate = useNavigate()
  const {
    data: rooms,
    loading,
    error,
  } = useFetch("http://localhost:8000/rooms/");

  if (error) return <div>Some thing went wrong : {error}</div>


  return (
    <div>
      <div className="page_header">
        <h1>Rooms</h1>
      </div>

      <div className="seperation_section">
        <button type="button" onClick={() => navigate('/rooms/add')}>Add Room</button>
        <hr />
      </div>

      <div className="items_list">
        <ul>
          {!loading &&
            rooms.map((room, index) => {
              return <li key={index} onClick={() => navigate(`/rooms/${room.id}`)}>Room Number : {room.room_number}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default Rooms;
