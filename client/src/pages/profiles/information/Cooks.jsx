import React, { useState } from "react";
import { DeleteProfile } from "../../../hooks/deleteProfile";

import EditIcon from "../../../assets/icons/Editnormal.svg";
import EditIconHover from "../../../assets/icons/Edit.svg";
import DeleteIcon from "../../../assets/icons/deletenormal.svg";
import DeleteIconHover from "../../../assets/icons/delete.svg";
import { useNavigate } from "react-router-dom";
const Cooks = ({ data: cook }) => {
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
        <div className="profile_name">{cook?.name}</div>
        <div className="icons">
          <img
            src={EditIconSource}
            alt={`edit students`}
            title={`Edit students`}
            onClick={() => navigate(`/profiles/student/update/${cook?.id}`)}
            onMouseEnter={handleEMouseEnter}
            onMouseLeave={handleEMouseLeave}
          />
          <img
            src={DeleteIconSource}
            alt={`delete students`}
            title={`Delete students`}
            onClick={() => {
              DeleteProfile(`/profiles/student/${cook?.id}/`);
              navigate("/profiles/");
            }}
            onMouseEnter={handleDMouseEnter}
            onMouseLeave={handleDMouseLeave}
          />
        </div>
      </div>

      <div className="profile_header">
        <h1>Cook</h1>
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
            <td>{cook?.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{cook?.age}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{cook?.address}</td>
          </tr>
          <tr>
            <th>Phone number</th>
            <td>{cook?.phone}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{cook?.email}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{cook?.gender}</td>
          </tr>
          <tr>
            <th>Aadhar number</th>
            <td>{cook?.aadhar_number}</td>
          </tr>
          <tr>
            <th>Cast</th>
            <td>{cook?.cast}</td>
          </tr>
          <tr>
            <th>Emergency contact number</th>
            <td>{cook?.emergency_contact}</td>
          </tr>
          <tr>
            <th>Salary</th>
            <td>{cook?.salary}</td>
          </tr>
          <tr>
            <th>Experience</th>
            <td>{cook?.experience}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Cooks;
