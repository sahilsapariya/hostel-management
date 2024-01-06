import React, { useState } from "react";
import { DeleteProfile } from "../../../hooks/deleteProfile";

import EditIcon from "../../../assets/icons/Editnormal.svg";
import EditIconHover from "../../../assets/icons/Edit.svg";
import DeleteIcon from "../../../assets/icons/deletenormal.svg";
import DeleteIconHover from "../../../assets/icons/delete.svg";
import { useNavigate } from "react-router-dom";

const Student = ({ data: student }) => {
  const navigate = useNavigate();

  const [isEHovered, setIsEHovered] = useState(false);
  const [isDHovered, setIsDHovered] = useState(false);

  const handleEMouseEnter = () => {
    setIsEHovered(true);
  };
  const handleDMouseEnter = () => {
    setIsDHovered(true);
  };

  const handleEMouseLeave = () => {
    setIsEHovered(false);
  };
  const handleDMouseLeave = () => {
    setIsDHovered(false);
  };

  const EditIconSource = isEHovered ? EditIconHover : EditIcon;
  const DeleteIconSource = isDHovered ? DeleteIconHover : DeleteIcon;
  return (
    <>
      <div className="information_header">
        <div className="profile_name">{student?.name}</div>
        <div className="icons">
          <img
            src={EditIconSource}
            alt={`edit students`}
            title={`Edit students`}
            onClick={() => navigate(`/profiles/student/update/${student?.id}`)}
            onMouseEnter={handleEMouseEnter}
            onMouseLeave={handleEMouseLeave}
          />
          <img
            src={DeleteIconSource}
            alt={`delete students`}
            title={`Delete students`}
            onClick={() => {
              DeleteProfile(`/profiles/student/${student?.id}/`);
              navigate("/profiles/");
            }}
            onMouseEnter={handleDMouseEnter}
            onMouseLeave={handleDMouseLeave}
          />
        </div>
      </div>

      <div className="profile_header">
        <h1>Student</h1>
      </div>

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
            <td>{student?.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{student?.age}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{student?.address}</td>
          </tr>
          <tr>
            <th>Phone number</th>
            <td>{student?.phone}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{student?.email}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{student?.gender}</td>
          </tr>
          <tr>
            <th>Aadhar number</th>
            <td>{student?.aadhar_number}</td>
          </tr>
          <tr>
            <th>Cast</th>
            <td>{student?.cast}</td>
          </tr>
          <tr>
            <th>Emergency contact number</th>
            <td>{student?.emergency_contact}</td>
          </tr>
          <tr>
            <th>Room number</th>
            <td>{student?.hostel_room_number}</td>
          </tr>
          <tr>
            <th>Blood group</th>
            <td>{student?.blood_group}</td>
          </tr>
          <tr>
            <th>Allergies</th>
            <td>
              {student?.allergies?.map((allergy, index) => {
                return <li key={index}>{allergy}</li>;
              })}
            </td>
          </tr>
          <tr>
            <th>Fees payment</th>
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
        </tbody>
      </table>
    </>
  );
};

export default Student;
