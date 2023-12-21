import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { DeleteProfile } from "../../hooks/deleteProfile";

const Room = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    data: room,
    loading,
    error,
  } = useFetch(`http://127.0.0.1:8000/rooms/${id}/`);

  if (error) return <div>Something went wrong : {error}</div>;

  return (
    <div>
      {!loading && (
        <>
          <div className="page_header">
            <h1>{room.room_number}</h1>
            <button
              type="button"
              onClick={() => navigate(`/rooms/update/${id}/`)}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                DeleteProfile(`http://127.0.0.1:8000/rooms/${room.id}/`);
                navigate("/rooms");
              }}
            >
              Delete
            </button>
          </div>
          <div className="item_content">
            <table>
              <tr>
                <th>Room Number</th>
                <td>{room.room_number}</td>
              </tr>
              <tr>
                <th>Room Capacity</th>
                <td>{room.capacity}</td>
              </tr>
              <tr>
                <th>Rent</th>
                <td>{room.rent}</td>
              </tr>
              <tr>
                <th>Room Facilities</th>
                <td>
                  {room.facilities.ac && <span>AC</span>}
                  {room.facilities.fridge && <span>Refrigerator</span>}
                </td>
              </tr>
              <tr>
                <th>Study Tables</th>
                <td>{room.number_of_study_tables}</td>
              </tr>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Room;
