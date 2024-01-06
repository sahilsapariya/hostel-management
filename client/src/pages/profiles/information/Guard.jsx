import React, { useState } from "react";
import { DeleteProfile } from "../../../hooks/deleteProfile";

import EditIcon from "../../../assets/icons/Editnormal.svg";
import EditIconHover from "../../../assets/icons/Edit.svg";
import DeleteIcon from "../../../assets/icons/deletenormal.svg";
import DeleteIconHover from "../../../assets/icons/delete.svg";
import { useNavigate } from "react-router-dom";
const Guard = ({ data: guard }) => {
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
        <div className="profile_name">{guard?.name}</div>
        <div className="icons">
          <img
            src={EditIconSource}
            alt={`edit students`}
            title={`Edit students`}
            onClick={() => navigate(`/profiles/guard/update/${guard?.id}`)}
            onMouseEnter={handleEMouseEnter}
            onMouseLeave={handleEMouseLeave}
          />
          <img
            src={DeleteIconSource}
            alt={`delete students`}
            title={`Delete students`}
            onClick={() => {
              DeleteProfile(`/profiles/guard/${guard?.id}/`);
              navigate("/profiles/");
            }}
            onMouseEnter={handleDMouseEnter}
            onMouseLeave={handleDMouseLeave}
          />
        </div>
      </div>

      <div className="profile_header">
        <h1>Guard</h1>
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
            <td>{guard?.name}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{guard?.age}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{guard?.address}</td>
          </tr>
          <tr>
            <th>Phone number</th>
            <td>{guard?.phone}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{guard?.email}</td>
          </tr>
          <tr>
            <th>Gender</th>
            <td>{guard?.gender}</td>
          </tr>
          <tr>
            <th>Aadhar number</th>
            <td>{guard?.aadhar_number}</td>
          </tr>
          <tr>
            <th>Cast</th>
            <td>{guard?.cast}</td>
          </tr>
          <tr>
            <th>Emergency contact number</th>
            <td>{guard?.emergency_contact}</td>
          </tr>
          <tr>
            <th>Salary</th>
            <td>{guard?.salary}</td>
          </tr>
          <tr>
            <th>Experience</th>
            <td>{guard?.experience}</td>
          </tr>
          <tr>
            <th>Shift Time Start</th>
            <td>{guard?.shift_start}</td>
          </tr>
          <tr>
            <th>Shift Time End</th>
            <td>{guard?.shift_end}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Guard;
