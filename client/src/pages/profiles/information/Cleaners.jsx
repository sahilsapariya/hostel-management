import React from "react";

const Cleaners = ({ data: cleaner }) => {


  return (
    <table className="information_table">
      <tr>
        <td>
          <th>Name</th>
        </td>
        <td>{cleaner?.name}</td>
      </tr>
      <tr>
        <td>
          <th>Age</th>
        </td>
        <td>{cleaner?.age}</td>
      </tr>
      <tr>
        <td>
          <th>Address</th>
        </td>
        <td>{cleaner?.address}</td>
      </tr>
      <tr>
        <td>
          <th>Phone number</th>
        </td>
        <td>{cleaner?.phone}</td>
      </tr>
      <tr>
        <td>
          <th>Email</th>
        </td>
        <td>{cleaner?.email}</td>
      </tr>
      <tr>
        <td>
          <th>Gender</th>
        </td>
        <td>{cleaner?.gender}</td>
      </tr>
      <tr>
        <td>
          <th>Aadhar number</th>
        </td>
        <td>{cleaner?.aadhar_number}</td>
      </tr>
      <tr>
        <td>
          <th>Cast</th>
        </td>
        <td>{cleaner?.cast}</td>
      </tr>
      <tr>
        <td>
          <th>Emergency contact number</th>
        </td>
        <td>{cleaner?.emergency_contact}</td>
      </tr>
      <tr>
        <td>
          <th>Salary</th>
        </td>
        <td>{cleaner?.salary}</td>
      </tr>
    </table>
  );
};

export default Cleaners;
