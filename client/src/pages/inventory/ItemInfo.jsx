import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import baseurl from "../../config";
import { DeleteProfile } from "../../hooks/deleteProfile";

import EditIcon from "../../assets/icons/Editnormal.svg";
import EditIconHover from "../../assets/icons/Edit.svg";
import DeleteIcon from "../../assets/icons/deletenormal.svg";
import DeleteIconHover from "../../assets/icons/delete.svg";

const ItemInfo = () => {
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
    data: item,
    loading,
    error,
  } = useFetch(`${baseurl}/inventory/${id}/`);

  if (error) return <div>Something went wrong : {error}</div>;
  return (
    <div>
      {!loading && (
        <div className="inventory__container">
          <div className="information_header">
            <div className="profile_name">Item information</div>
            <div className="icons">
              <img
                src={EditIconSource}
                alt={`edit item`}
                title={`Edit item`}
                onClick={() => navigate(`/inventory/update/${item?.id}`)}
                onMouseEnter={handleEMouseEnter}
                onMouseLeave={handleEMouseLeave}
              />
              <img
                src={DeleteIconSource}
                alt={`delete item`}
                title={`Delete item`}
                onClick={() => {
                  DeleteProfile(`/inventory/${item?.id}/`);
                  navigate("/inventory/");
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
                <th>Name</th>
                <td>{item.item_name}</td>
              </tr>
              <tr>
                <th>Category</th>
                <td>{item.category}</td>
              </tr>
              <tr>
                <th>Quantity</th>
                <td>{item.quantity}</td>
              </tr>
              <tr>
                <th>Unit</th>
                <td>{item.unit}</td>
              </tr>
              <tr>
                <th>Purchase Price</th>
                <td>{item.purchase_price}</td>
              </tr>
              <tr>
                <th>Purchase Date</th>
                <td>{item.purchase_date}</td>
              </tr>
              <tr>
                <th>Vendor Name</th>
                <td>{item.vendor_name}</td>
              </tr>
              <tr>
                <th>Vendor Phone Number</th>
                <td>{item.vendor_phone_number}</td>
              </tr>
              <tr>
                <th>Minimum Stock</th>
                <td>{item.minimum_stock}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{item.status}</td>
              </tr>
              <tr>
                <th>Notes</th>
                <td>{item.notes}</td>
              </tr>
              </tbody>
            </table>
          </div>

      )}
    </div>
  );
};

export default ItemInfo;
