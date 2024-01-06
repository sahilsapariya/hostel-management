import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Inventory.scss";
import baseurl from "../../config";
import useFetch from "../../hooks/useFetch";

import AddIcon from "../../assets/icons/addnormal.svg";
import AddIconHover from "../../assets/icons/add.svg";

const Inventory = () => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconSource = isHovered ? AddIconHover : AddIcon;

  const { data: items, loading, error } = useFetch(`${baseurl}/inventory/`);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Some thing went wrong : {error}</div>;

  return (
    <div className="inventory__container">
      <div className="profile_header">
        <h1>Inventory</h1>
        <img
          src={iconSource}
          alt={`add item`}
          title={`Add item`}
          onClick={() => navigate(`/inventory/add`)}
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
            <th>Items</th>
          </tr>
        </thead>

        <tbody>
          {items?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td
                  onClick={() => navigate(`/inventory/information/${item.id}`)}
                >
                  {item.item_name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
