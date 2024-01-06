import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import baseurl from "../../config";
import { DeleteProfile } from "../../hooks/deleteProfile";
import "../../styles/Profiles.scss";

import EditIcon from "../../assets/icons/Editnormal.svg";
import EditIconHover from "../../assets/icons/Edit.svg";
import DeleteIcon from "../../assets/icons/deletenormal.svg";
import DeleteIconHover from "../../assets/icons/delete.svg";

const BillInfo = () => {
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

  const { id } = useParams();

  const {
    data: bill,
    loading,
    error,
  } = useFetch(`${baseurl}/payments/bill/${id}/`);

  if (error) return <div>Something went wrong : {error}</div>;

  return (
    <div>
      {!loading && (
        <div className="bill__container">
          <div className="information_header">
            <div className="profile_name">Bill information</div>
            <div className="icons">
              <img
                src={EditIconSource}
                alt={`edit bill`}
                title={`Edit bill`}
                onClick={() => navigate(`/bill/update/${bill?.id}`)}
                onMouseEnter={handleEMouseEnter}
                onMouseLeave={handleEMouseLeave}
              />
              <img
                src={DeleteIconSource}
                alt={`delete bill`}
                title={`Delete bill`}
                onClick={() => {
                  DeleteProfile(`/payments/bill/${bill?.id}/`);
                  navigate("/bills/");
                }}
                onMouseEnter={handleDMouseEnter}
                onMouseLeave={handleDMouseLeave}
              />
            </div>
          </div>
          <table
            className="information_table"
            style={{
              margin: "2rem auto",
            }}
          >
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
                <th>Category</th>
                <td>{bill.bill_type}</td>
              </tr>
              <tr>
                <th>Amount</th>
                <td>{bill.amount}</td>
              </tr>
              <tr>
                <th>Bill date</th>
                <td>{bill.bill_date}</td>
              </tr>
              <tr>
                <th>Due date</th>
                <td>{bill.due_date}</td>
              </tr>
              <tr>
                <th>Payment status</th>
                <td>{bill.payment_status}</td>
              </tr>
              <tr>
                <th>Items</th>
                <td>{bill.items}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BillInfo;
