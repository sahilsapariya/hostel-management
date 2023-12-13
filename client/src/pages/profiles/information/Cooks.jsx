import React from "react";

const Cooks = ({ data: cook }) => {
  return (
    <table className="information_table">
      <tr>
        <td>
          <th>Name</th>
        </td>
        <td>{cook.name}</td>
      </tr>
      <tr>
        <td>
          <th>Age</th>
        </td>
        <td>{cook.age}</td>
      </tr>
      <tr>
        <td>
          <th>Address</th>
        </td>
        <td>{cook.address}</td>
      </tr>
      <tr>
        <td>
          <th>Phone number</th>
        </td>
        <td>{cook.phone}</td>
      </tr>
      <tr>
        <td>
          <th>Email</th>
        </td>
        <td>{cook.email}</td>
      </tr>
      <tr>
        <td>
          <th>Gender</th>
        </td>
        <td>{cook.gender}</td>
      </tr>
      <tr>
        <td>
          <th>Aadhar number</th>
        </td>
        <td>{cook.aadhar_number}</td>
      </tr>
      <tr>
        <td>
          <th>Cast</th>
        </td>
        <td>{cook.cast}</td>
      </tr>
      <tr>
        <td>
          <th>Emergency contact number</th>
        </td>
        <td>{cook.emergency_contact}</td>
      </tr>
      <tr>
        <td>
          <th>Salary</th>
        </td>
        <td>{cook.salary}</td>
      </tr>
      <tr>
        <td>
          <th>Experience</th>
        </td>
        <td>{cook.experience}</td>
      </tr>
    </table>
  );
};

export default Cooks;
