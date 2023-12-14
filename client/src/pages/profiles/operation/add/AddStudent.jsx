import React, { useState } from "react";
import AddProfile from "../../../../hooks/useAdd";

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
  // const [fees, setFees] = useState();

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

  return (
    <form
      onSubmit={() =>
        AddProfile("http://localhost:8000/profiles/student/", data)
      }
      method="post"
    >
      <table className="information_table">
        <tr>
          <td>
            <th>Name</th>
          </td>
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
          <td>
            <th>Age</th>
          </td>
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
          <td>
            <th>Address</th>
          </td>
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
          <td>
            <th>Phone number</th>
          </td>
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
          <td>
            <th>Email</th>
          </td>
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
          <td>
            <th>Gender</th>
          </td>
          <td>
            {/* <input type="text" name='gender' placeholder='Enter ' onChange={(e) => setName(e.target.value)} /> */}
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
          <td>
            <th>Aadhar number</th>
          </td>
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
          <td>
            <th>Cast</th>
          </td>
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
          <td>
            <th>Emergency contact number</th>
          </td>
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
          <td>
            <th>Room number</th>
          </td>
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
          <td>
            <th>Blood group</th>
          </td>
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
          <td>
            <th>Allergies</th>
          </td>
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
        {/* <tr>
        <td>
          <th>Fees payment</th>
        </td>
        <td>
          {student.fees_payment_details?.map((fee, index) => {
            return (
              <div key={index}>
                <li>{fee.date}</li>
                <li>{fee.amount}</li>
                <li>{fee.mode}</li>
                <li>{fee.status}</li> <br />
              </div>
            );
          })}
        </td>
      </tr> */}
      </table>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default AddStudent;
