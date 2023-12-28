import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import baseurl from "../../config";
import { DeleteProfile } from "../../hooks/deleteProfile";

const ItemInfo = () => {
  const navigate = useNavigate();

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
        <>
          <div className="page_header">
            <h1>{item.item_name}</h1>
            <button
              type="button"
              onClick={() => navigate(`/inventory/update/${id}/`)}
            >
              Edit
            </button>
            <button
              type="button"
              onClick={() => {
                DeleteProfile(`${baseurl}/inventory/${item.id}/`);
                navigate("/inventory");
              }}
            >
              Delete
            </button>
          </div>
          <div className="item_content">
            <table>
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
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemInfo;
