import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { DeleteProfile } from "../../hooks/deleteProfile";
import baseurl from "../../config";

import EditIcon from "../../assets/icons/Editnormal.svg";
import EditIconHover from "../../assets/icons/Edit.svg";
import DeleteIcon from "../../assets/icons/deletenormal.svg";
import DeleteIconHover from "../../assets/icons/delete.svg";

const Room = () => {
  const navigate = useNavigate();

  const [isEHovered, setIsEHovered] = useState(false);
  const [isDHovered, setIsDHovered] = useState(false);

  const handleEMouseEnter = () => {
    setIsEHovered(true);
  };
  const handleDMouseEnter = () => {
    setIsDHovered(true);
  };

  const handleEMouseLeave = () => {
    setIsEHovered(false);
  };
  const handleDMouseLeave = () => {
    setIsDHovered(false);
  };

  const EditIconSource = isEHovered ? EditIconHover : EditIcon;
  const DeleteIconSource = isDHovered ? DeleteIconHover : DeleteIcon;

  const { id } = useParams();

  const { data: room, loading, error } = useFetch(`${baseurl}/rooms/${id}/`);

  if (error) return <div>Something went wrong : {error}</div>;

  return (
    <div>
      {!loading && (
        <>
          <div className="bill__container">
            <div className="information_header">
              <div className="profile_name">Room: {room?.room_number}</div>
              <div className="icons">
                <img
                  src={EditIconSource}
                  alt={`edit room`}
                  title={`Edit room`}
                  onClick={() => navigate(`/rooms/update/${room?.id}`)}
                  onMouseEnter={handleEMouseEnter}
                  onMouseLeave={handleEMouseLeave}
                />
                <img
                  src={DeleteIconSource}
                  alt={`delete room`}
                  title={`Delete room`}
                  onClick={() => {
                    DeleteProfile(`/rooms/${room?.id}/`);
                    navigate("/rooms/");
                  }}
                  onMouseEnter={handleDMouseEnter}
                  onMouseLeave={handleDMouseLeave}
                />
              </div>
            </div>
            <table
              className="information_table"
              style={{
                margin: "2rem auto",
              }}
            >
              <colgroup>
                <col style={{ width: "40%" }} />
                <col style={{ width: "60%" }} />
              </colgroup>

              <tbody>
                <tr>
                  <th>Fields</th>
                  <th>Values</th>
                </tr>
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
                    {room.facilities.ac && <li>AC</li>}
                    {room.facilities.fridge && <li>Refrigerator</li>}
                  </td>
                </tr>
                <tr>
                  <th>Study Tables</th>
                  <td>{room.number_of_study_tables}</td>
                </tr>
                <tr>
                  <th>Students list</th>
                  <td>
                    {room.students.length !== 0
                      ? room.students.map((student, index) => {
                          return <li key={index}>{student.name}</li>;
                        })
                      : "None"}
                  </td>
                </tr>
                <tr>
                  <th>Availibility</th>
                  <td>
                    {room.students.length >= room.capacity
                      ? "Full"
                      : room.capacity - room.students.length}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Room;
