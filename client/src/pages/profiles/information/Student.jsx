import React from "react";

const Student = ({ data: student }) => {
  return (
    <>
      <table className="information_table">
        <tr>
          <td>
            <th>Name</th>
          </td>
          <td>{student?.name}</td>
        </tr>
        <tr>
          <td>
            <th>Age</th>
          </td>
          <td>{student?.age}</td>
        </tr>
        <tr>
          <td>
            <th>Address</th>
          </td>
          <td>{student?.address}</td>
        </tr>
        <tr>
          <td>
            <th>Phone number</th>
          </td>
          <td>{student?.phone}</td>
        </tr>
        <tr>
          <td>
            <th>Email</th>
          </td>
          <td>{student?.email}</td>
        </tr>
        <tr>
          <td>
            <th>Gender</th>
          </td>
          <td>{student?.gender}</td>
        </tr>
        <tr>
          <td>
            <th>Aadhar number</th>
          </td>
          <td>{student?.aadhar_number}</td>
        </tr>
        <tr>
          <td>
            <th>Cast</th>
          </td>
          <td>{student?.cast}</td>
        </tr>
        <tr>
          <td>
            <th>Emergency contact number</th>
          </td>
          <td>{student?.emergency_contact}</td>
        </tr>
        <tr>
          <td>
            <th>Room number</th>
          </td>
          <td>{student?.hostel_room_number}</td>
        </tr>
        <tr>
          <td>
            <th>Blood group</th>
          </td>
          <td>{student?.blood_group}</td>
        </tr>
        <tr>
          <td>
            <th>Allergies</th>
          </td>
          <td>
            {student?.allergies?.map((allergy, index) => {
              return <li key={index}>{allergy}</li>;
            })}
          </td>
        </tr>
        <tr>
          <td>
            <th>Fees payment</th>
          </td>
          <td>
            {student?.fees_payment_details?.map((fee, index) => {
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
        </tr>
      </table>
    </>
  );
};

export default Student;
