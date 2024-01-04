import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Inventory.scss";
import baseurl from "../../config";
import useFetch from "../../hooks/useFetch";

const Bills = () => {
  const navigate = useNavigate();

  const { data: bills, loading, error } = useFetch(`${baseurl}/payments/bills/`);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Some thing went wrong : {error}</div>;

  return (
    <div>
      <div className="page_header">
        <h1>Bills</h1>
      </div>

      <div className="seperation_section">
        <button type="button" onClick={() => navigate("/bill/add")}>
          Add Bill
        </button>
        <hr />
      </div>

      <div className="items_list">
        <ul>
          {bills?.map((bill) => {
            return (
              <li
                key={bill.id}
                onClick={() => navigate(`/bill/information/${bill.id}`)}
              >
                {bill.bill_date} {bill.bill_type}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Bills;
