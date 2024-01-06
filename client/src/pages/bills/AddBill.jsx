import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseurl from "../../config";

const AddBill = () => {
  const navigate = useNavigate();

  const [itemData, setItemData] = useState({
    bill_type: "",
    amount: 0,
    bill_date: "",
    due_date: "",
    payment_status: "",
    items: [],
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

  const addData = async (url, data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log(error);
    } finally {
      navigate("/bills");
    }
  };

  useEffect(() => {
    console.log(itemData);
  }, [itemData]);

  return (
    <div className="bill__container">
      <div className="profile_header">
        <h1>Add Bill</h1>
      </div>
      <form onSubmit={() => addData(`${baseurl}/payments/bill/`, itemData)}>
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
                  value={itemData.bill_type}
                  onChange={handleChange}
                  placeholder="Enter bill category"
                />
              </td>
            </tr>
            <tr>
              <th>Amount</th>
              <td>
                <input
                  type="text"
                  name="amount"
                  value={itemData.amount}
                  onChange={handleChange}
                  placeholder="Enter amount"
                />
              </td>
            </tr>
            <tr>
              <th>Bill Date</th>
              <td>
                <input
                  type="date"
                  name="bill_date"
                  value={itemData.bill_date}
                  onChange={handleChange}
                  placeholder="Enter bill date"
                />
              </td>
            </tr>
            <tr>
              <th>Due Date</th>
              <td>
                <input
                  type="date"
                  name="due_date"
                  value={itemData.due_date}
                  onChange={handleChange}
                  placeholder="Enter bill due date"
                />
              </td>
            </tr>
            <tr>
              <th>Payment status</th>
              <td>
                <input
                  type="text"
                  name="payment_status"
                  value={itemData.payment_status}
                  onChange={handleChange}
                  placeholder="Enter payment status"
                />
              </td>
            </tr>
            <tr>
              <th>Items</th>
              <td>
                <input
                  type="text"
                  name="items"
                  value={itemData.items}
                  onChange={handleItemChange}
                  placeholder="Enter items"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Save details</button>
      </form>
    </div>
  );
};

export default AddBill;
