import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import baseurl from "../../config";

const AddRoom = () => {
  const navigate = useNavigate();

  const [roomNumber, setRoomNumber] = useState();
  const [capacity, setCapacity] = useState();
  const [rent, setRent] = useState();
  const [studyTables, setStudyTables] = useState();

  // State to manage the checked state of each checkbox
  const [checkboxes, setCheckboxes] = useState({
    ac: false,
    fridge: false,
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

  const addData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/rooms/");
    }
  };

  return (
    <div className="bill__container">
      <div className="profile_header">
        <h1>Add Room</h1>
      </div>
      <form onSubmit={() => addData(`${baseurl}/rooms/`, data)}>
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
          </tbody>
        </table>
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
};

const CheckBoxGroup = ({ checkboxes, handleCheckboxChange }) => {
  return (
    <>
      <input
        type="checkbox"
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

export default AddRoom;
