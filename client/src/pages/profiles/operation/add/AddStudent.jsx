import React, { useState } from "react";
import baseurl from "../../../../config";
// import AddProfile from "../../../../hooks/useAdd";

const AddStudent = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [emergencyContact, setEmergencyContact] = useState();
  const [gender, setGender] = useState();
  const [aadharNumber, setAadharNumber] = useState();
  const [cast, setCast] = useState();
  const [roomNumber, setRoomNumber] = useState();
  const [bloodGroup, setBloodGroup] = useState();
  const [allergies, setAllergies] = useState([]);

  const data = {
    name: name,
    age: age,
    address: address,
    phone: phone,
    email: email,
    emergency_contact: emergencyContact,
    gender: gender,
    aadhar_number: aadharNumber,
    cast: cast,
    hostel_room_number: roomNumber,
    blood_group: bloodGroup,
    allergies: allergies,
    fees_payment_details: [],
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
      console.log("profile added successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={() => {
        addData(`${baseurl}/profiles/student/`, data);
      }}
      // method="post"
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
            <th>Name</th>
            <td>
              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                onChange={(e) => setName(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Age</th>
            <td>
              <input
                type="text"
                name="age"
                placeholder="Enter age"
                onChange={(e) => setAge(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Address</th>
            <td>
              <input
                type="text"
                name="address"
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Phone number</th>
            <td>
              <input
                type="text"
                name="phone_number"
                placeholder="Enter phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <input
                type="text"
                name="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>
              <select
                id="gender"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </td>
          </tr>
          <tr>
            <th>Aadhar number</th>
            <td>
              <input
                type="text"
                name="aadhar number"
                placeholder="Enter Aadhar number"
                onChange={(e) => setAadharNumber(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Cast</th>
            <td>
              <input
                type="text"
                name="cast"
                placeholder="Enter cast"
                onChange={(e) => setCast(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Emergency contact number</th>
            <td>
              <input
                type="text"
                name="emergency contact number"
                placeholder="Enter emergency contact number"
                onChange={(e) => setEmergencyContact(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Room number</th>
            <td>
              <input
                type="text"
                name="room number"
                placeholder="Enter room number"
                onChange={(e) => setRoomNumber(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Blood group</th>
            <td>
              <input
                type="text"
                name="blood group"
                placeholder="Enter blood group"
                onChange={(e) => setBloodGroup(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Allergies</th>
            <td>
              <input
                type="text"
                name="allergies"
                placeholder="Enter allergies seperate with ','(comma)"
                onChange={(e) => {
                  const allergiess = e.target.value.split(",");
                  setAllergies(allergiess);
                }}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
