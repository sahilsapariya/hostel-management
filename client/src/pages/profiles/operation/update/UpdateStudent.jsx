import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { updateData } from "../../../../hooks/useUpdate";
import baseurl from "../../../../config";

const UpdateStudent = ({ data: student }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(student.name);
  const [age, setAge] = useState(student.age);
  const [address, setAddress] = useState(student.address);
  const [phone, setPhone] = useState(student.phone);
  const [email, setEmail] = useState(student.email);
  const [emergencyContact, setEmergencyContact] = useState(
    student.emergency_contact
  );
  const [gender, setGender] = useState(student.gender);
  const [aadharNumber, setAadharNumber] = useState(student.aadhar_number);
  const [cast, setCast] = useState(student.cast);
  const [roomNumber, setRoomNumber] = useState(student.hostel_room_number);
  const [bloodGroup, setBloodGroup] = useState(student.blood_group);
  const [allergies, setAllergies] = useState(student.allergies);
  const [fees, setFees] = useState(student.fees_payment_details);

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
    fees_payment_details: fees,
  };

  const convertDate = (inputDate) => {
    const parts = inputDate.split("-");
    if (parts.length === 3) {
      return `${parts[2]}-${parts[1]}-${parts[0]}`;
    }
    return "";
  };

  return (
    <form
      onSubmit={() => {
        updateData(`${baseurl}/profiles/student/${student.id}/`, data);
        navigate(`/profiles/students/${student.id}`);
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
              {/* <input type="text" name='gender' placeholder='Enter ' onChange={(e) => setName(e.target.value)} /> */}
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
            <th>Room number</th>
            <td>
              <input
                type="text"
                name="room number"
                placeholder="Enter room number"
                value={roomNumber}
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
                value={bloodGroup}
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
                value={allergies}
                onChange={(e) => {
                  const allergiess = e.target.value.split(",");
                  setAllergies(allergiess);
                }}
              />
            </td>
          </tr>
          <tr>
            <th>Fees payment</th>
            <td>
              {fees?.map((fee, index) => {
                return (
                  <div key={index}>
                    <br />
                    <li>Term : {index + 1}</li>
                    <li>
                      Date:{" "}
                      <input
                        type="date"
                        placeholder="Date"
                        name="date"
                        value={convertDate(fee["date"])}
                        onChange={(e) => {
                          const updatedFees = [...fees];
                          updatedFees[index]["date"] = e.target.value;
                          setFees(updatedFees);
                        }}
                      />
                    </li>
                    <li>
                      Amount :{" "}
                      <input
                        type="number"
                        placeholder="Enter amount"
                        name="amount"
                        value={fee["amount"]}
                        onChange={(e) => {
                          const updatedFees = [...fees];
                          updatedFees[index]["amount"] = e.target.value;
                          setFees(updatedFees);
                        }}
                      />
                    </li>
                    <li>
                      Payment mode :{" "}
                      <input
                        type="text"
                        placeholder="Enter payment mode"
                        name="payment mode"
                        value={fee["mode"]}
                        onChange={(e) => {
                          const updatedFees = [...fees];
                          updatedFees[index]["mode"] = e.target.value;
                          setFees(updatedFees);
                        }}
                      />
                    </li>
                    <li>
                      Status :{" "}
                      <input
                        type="text"
                        placeholder="Enter payment status"
                        name="payment status"
                        value={fee["status"]}
                        onChange={(e) => {
                          const updatedFees = [...fees];
                          updatedFees[index]["status"] = e.target.value;
                          setFees(updatedFees);
                        }}
                      />
                    </li>
                  </div>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
      <button type="submit">Update Student</button>
    </form>
  );
};

export default UpdateStudent;
