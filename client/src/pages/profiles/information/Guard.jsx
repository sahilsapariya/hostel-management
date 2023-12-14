import React from "react";

const Guard = ({ data: guard }) => {
  return (
    <table className="information_table">
      <tr>
        <td>
          <th>Name</th>
        </td>
        <td>{guard?.name}</td>
      </tr>
      <tr>
        <td>
          <th>Age</th>
        </td>
        <td>{guard?.age}</td>
      </tr>
      <tr>
        <td>
          <th>Address</th>
        </td>
        <td>{guard?.address}</td>
      </tr>
      <tr>
        <td>
          <th>Phone number</th>
        </td>
        <td>{guard?.phone}</td>
      </tr>
      <tr>
        <td>
          <th>Email</th>
        </td>
        <td>{guard?.email}</td>
      </tr>
      <tr>
        <td>
          <th>Gender</th>
        </td>
        <td>{guard?.gender}</td>
      </tr>
      <tr>
        <td>
          <th>Aadhar number</th>
        </td>
        <td>{guard?.aadhar_number}</td>
      </tr>
      <tr>
        <td>
          <th>Cast</th>
        </td>
        <td>{guard?.cast}</td>
      </tr>
      <tr>
        <td>
          <th>Emergency contact number</th>
        </td>
        <td>{guard?.emergency_contact}</td>
      </tr>
      <tr>
        <td>
          <th>Salary</th>
        </td>
        <td>{guard?.salary}</td>
      </tr>
      <tr>
        <td>
          <th>Experience</th>
        </td>
        <td>{guard?.experience}</td>
      </tr>
      <tr>
        <td>
          <th>Shift Time Start</th>
        </td>
        <td>{guard?.shift_start}</td>
      </tr>
      <tr>
        <td>
          <th>Shift Time End</th>
        </td>
        <td>{guard?.shift_end}</td>
      </tr>
    </table>
  );
};

export default Guard;
