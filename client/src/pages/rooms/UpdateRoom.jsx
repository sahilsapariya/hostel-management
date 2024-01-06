import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { updateData } from "../../hooks/useUpdate";
import baseurl from "../../config";

const UpdateRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: room, loading, error } = useFetch(`${baseurl}/rooms/${id}/`);

  const [roomNumber, setRoomNumber] = useState(room?.room_number);
  const [capacity, setCapacity] = useState(room?.capacity);
  const [rent, setRent] = useState(room?.rent);
  const [studyTables, setStudyTables] = useState(room?.number_of_study_tables);

  // State to manage the checked state of each checkbox
  const [checkboxes, setCheckboxes] = useState({
    ac: room?.facilities.ac,
    fridge: room?.facilities.fridge,
  });

  const data = {
    room_number: roomNumber,
    capacity: capacity,
    facilities: checkboxes,
    rent: rent,
    number_of_study_tables: studyTables,
  };

  // Function to handle individual checkbox change
  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes({
      ...checkboxes,
      [checkboxName]: !checkboxes[checkboxName],
    });
  };

  useEffect(() => {
    // Update state once the data is available
    if (room) {
      setRoomNumber(room.room_number || "");
      setCapacity(room.capacity || "");
      setRent(room.rent || "");
      setStudyTables(room.number_of_study_tables || "");
      setCheckboxes({
        ac: room.facilities?.ac || false,
        fridge: room.facilities?.fridge || false,
      });
    }
  }, [room]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong : {error}</div>;

  return (
    <div className="bill__container">
      <div className="profile_header">
        <h1>Update Room</h1>
      </div>
      <form
        onSubmit={() => {
          updateData(`${baseurl}/rooms/${id}/`, data);
          navigate(`/rooms/${id}`);
        }}
      >
        <table className="information_table">
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
              <td>
                <input
                  type="number"
                  name="room number"
                  placeholder="Enter room number"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Capicity</th>
              <td>
                <input
                  type="number"
                  name="capicity"
                  placeholder="Enter capicity"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Rent</th>
              <td>
                <input
                  type="number"
                  name="rent"
                  placeholder="Enter rent"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>No of Study Tables</th>
              <td>
                <input
                  type="number"
                  name="number of Study Tables"
                  placeholder="Enter number of Study Tables"
                  value={studyTables}
                  onChange={(e) => setStudyTables(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Facilities</th>
              <td>
                <CheckBoxGroup
                  handleCheckboxChange={handleCheckboxChange}
                  checkboxes={checkboxes}
                />
              </td>
            </tr>
            <tr>
              <th>List of accessors</th>
              <td>comming soon</td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Update Room</button>
      </form>
    </div>
  );
};

const CheckBoxGroup = ({ checkboxes, handleCheckboxChange }) => {
  return (
    <>
      <input
        type="checkbox"
        checked={checkboxes.ac}
        onChange={() => handleCheckboxChange("ac")}
        style={{
          width: "fit-content",
          marginRight: "1rem",
        }}
      />
      AC
      <br />
      <input
        type="checkbox"
        checked={checkboxes.fridge}
        onChange={() => handleCheckboxChange("fridge")}
        style={{
          width: "fit-content",
          marginRight: "1rem",
        }}
      />
      Refrigerator
    </>
  );
};

export default UpdateRoom;
