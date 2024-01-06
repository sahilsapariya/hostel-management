import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import baseurl from "../../config";
import useFetch from "../../hooks/useFetch";
import { updateData } from "../../hooks/useUpdate";

const UpdateBill = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: initialData,
    loading,
    error,
  } = useFetch(`${baseurl}/payments/bill/${id}/`);

  const [itemData, setItemData] = useState({
    bill_type: initialData?.bill_type || "",
    amount: initialData?.amount || 0,
    bill_date: initialData?.bill_date || "",
    due_date: initialData?.due_date || "",
    payment_status: initialData?.payment_status || "",
    items: initialData?.items || [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleItemChange = (e) => {
    const { name, value } = e.target;
    const data = value.split(", ");

    setItemData((prevData) => ({
      ...prevData,
      [name]: data,
    }));
  };

  useEffect(() => {
    setItemData(initialData);
  }, [initialData]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong : {error}</div>;

  return (
    <div className="bill__container">
      <div className="profile_header">
        <h1>Update Bill</h1>
      </div>
      <form
        onSubmit={() => {
          updateData(`${baseurl}/payments/bill/${id}/`, itemData);
          navigate(`/bill/information/${id}`);
        }}
      >
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
              <th>Bill category</th>
              <td>
                <input
                  type="text"
                  name="bill_type"
                  value={itemData?.bill_type}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>
                <input
                  type="text"
                  name="amount"
                  value={itemData?.amount}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Bill Date</th>
              <td>
                <input
                  type="date"
                  name="bill_date"
                  value={itemData?.bill_date}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Due Date</th>
              <td>
                <input
                  type="date"
                  name="due_date"
                  value={itemData?.due_date}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Payment status</th>
              <td>
                <input
                  type="text"
                  name="payment_status"
                  value={itemData?.payment_status}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th>Items</th>
              <td>
                <input
                  type="text"
                  name="items"
                  value={itemData?.items}
                  onChange={handleItemChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateBill;
