import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import baseurl from "../../config";
import { DeleteProfile } from "../../hooks/deleteProfile";
const BillInfo = () => {
    const navigate = useNavigate();

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
      <>
        <div className="page_header">
          <h1>{bill.item_name}</h1>
          <button
            type="button"
            onClick={() => navigate(`/bill/update/${id}/`)}
          >
            Edit
          </button>
          <button
            type="button"
            onClick={() => {
              DeleteProfile(`${baseurl}/payments/bill/${bill.id}/`);
              navigate("/bills");
            }}
          >
            Delete
          </button>
        </div>
        <div className="item_content">
          <table>
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
            
          </table>
        </div>
      </>
    )}
  </div>
  )
}

export default BillInfo