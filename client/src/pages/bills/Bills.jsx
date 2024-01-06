import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Profiles.scss";
import "../../styles/Inventory.scss";
import baseurl from "../../config";
import useFetch from "../../hooks/useFetch";

import AddIcon from "../../assets/icons/addnormal.svg";
import AddIconHover from "../../assets/icons/add.svg";

const Bills = () => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconSource = isHovered ? AddIconHover : AddIcon;

  const {
    data: bills,
    loading,
    error,
  } = useFetch(`${baseurl}/payments/bills/`);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Some thing went wrong : {error}</div>;

  return (
    <div className="bill__container">
      <div className="profile_header">
        <h1>Bills</h1>
        <img
          src={iconSource}
          alt={`add bill`}
          title={`Add bill`}
          onClick={() => navigate(`/bill/add`)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      <table className="table__container">
        <colgroup>
          <col style={{ width: "50px" }} />
          <col style={{ width: "calc(100% - 50px)" }} />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Bills</th>
          </tr>
        </thead>

        <tbody>
          {bills?.map((bill, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td onClick={() => navigate(`/bill/information/${bill.id}`)}>
                  {bill.bill_date} {bill.bill_type}-{bill.amount}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Bills;
