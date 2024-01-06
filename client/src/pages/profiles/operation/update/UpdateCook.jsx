import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateData } from "../../../../hooks/useUpdate";
import baseurl from "../../../../config";

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
  const [salary, setSalary] = useState(cook.salary);
  const [experience, setExperience] = useState(cook.experience);

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
  };

  return (
    <form
      onSubmit={() => {
        updateData(`${baseurl}/profiles/cook/${cook.id}/`, data);
        navigate(`/profiles/cooks/${cook.id}`);
      }}
      method="post"
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
                value={name}
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
                value={age}
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
                value={address}
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
                value={phone}
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
                value={email}
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
            <th>Aadhar number</th>
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
            <th>Cast</th>
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
            <th>Emergency contact number</th>
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
            <th>Salary</th>
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
            <th>Experience</th>
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
        </tbody>
      </table>
      <button type="submit">Update Cook</button>
    </form>
  );
};

export default UpdateCook;
