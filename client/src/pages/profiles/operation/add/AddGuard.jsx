import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import baseurl from "../../../../config";

const AddGuard = () => {
  const navigate = useNavigate();

  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [emergencyContact, setEmergencyContact] = useState();
  const [gender, setGender] = useState();
  const [aadharNumber, setAadharNumber] = useState();
  const [cast, setCast] = useState();
  const [salary, setSalary] = useState();
  const [experience, setExperience] = useState();
  const [shiftStart, setShiftStart] = useState();
  const [shiftEnd, setShiftEnd] = useState();

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
    salary: salary,
    experience: experience,
    shift_start: shiftStart,
    shift_end: shiftEnd,
  };

  const addData = async (url, data) => {
    try {
      console.log(url);
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
      navigate("/profiles");
    }
  };

  return (
    <form onSubmit={() => addData(`${baseurl}/profiles/guard/`, data)}>
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
            <th>Salary</th>
            <td>
              <input
                type="number"
                name="salary"
                placeholder="Enter salary"
                onChange={(e) => setSalary(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Experience</th>
            <td>
              <input
                type="text"
                name="experience"
                placeholder="Enter experience"
                onChange={(e) => setExperience(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Shift start</th>
            <td>
              <input
                type="time"
                name="shift start"
                onChange={(e) => setShiftStart(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <th>Shift end</th>
            <td>
              <input
                type="time"
                name="shift end"
                onChange={(e) => setShiftEnd(e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Add Guard</button>
    </form>
  );
};

export default AddGuard;
