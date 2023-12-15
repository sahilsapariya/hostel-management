import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateData } from "../../../../hooks/useUpdate";

const UpdateCook = ({ data: cook }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(cook.name);
  const [age, setAge] = useState(cook.age);
  const [address, setAddress] = useState(cook.address);
  const [phone, setPhone] = useState(cook.phone);
  const [email, setEmail] = useState(cook.email);
  const [emergencyContact, setEmergencyContact] = useState(
    cook.emergency_contact
  );
  const [gender, setGender] = useState(cook.gender);
  const [aadharNumber, setAadharNumber] = useState(cook.aadhar_number);
  const [cast, setCast] = useState(cook.cast);
  const [salary, setSalary] = useState(cook.salary)
  const [experience, setExperience] = useState(cook.experience)

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
    experience: experience
  };

  return (
    <form
      onSubmit={() => {
        updateData(
          `http://localhost:8000/profiles/cook/${cook.id}/`,
          data
        );
        navigate(`/profiles/cooks/${cook.id}`);
      }}
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
              value={name}
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
              value={age}
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
              value={address}
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
              value={phone}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <th>Gender</th>
          </td>
          <td>
            <select
              id="gender"
              name="gender"
              value={gender}
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
              value={aadharNumber}
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
              value={cast}
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
              value={emergencyContact}
              onChange={(e) => setEmergencyContact(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <th>Salary</th>
          </td>
          <td>
            <input
              type="number"
              name="salary"
              placeholder="Enter salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </td>
        </tr>
        <tr>
          <td>
            <th>Experience</th>
          </td>
          <td>
            <input
              type="text"
              name="experience"
              placeholder="Enter experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </td>
        </tr>
        
      </table>
      <button type="submit">Update Cook</button>
    </form>
  );
};

export default UpdateCook;
