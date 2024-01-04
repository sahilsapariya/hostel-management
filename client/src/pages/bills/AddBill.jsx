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
    items: []
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
    console.log("inside add data")
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
    console.log(itemData)
  }, [itemData])

  return (
    <>
      <div className="page_header">
        <h1>Add Bill</h1>
      </div>
      <form onSubmit={() => addData(`${baseurl}/payments/bill/`, itemData)}>
        <table className="information_table">
          <tbody>
            <tr>
              <td>
                <th>Bill category</th>
              </td>
              <td>
                <input
                  type="text"
                  name="bill_type"
                  value={itemData.bill_type}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Amount</th>
              </td>
              <td>
                <input
                  type="text"
                  name="amount"
                  value={itemData.amount}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Bill Date</th>
              </td>
              <td>
                <input
                  type="date"
                  name="bill_date"
                  value={itemData.bill_date}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Due Date</th>
              </td>
              <td>
                <input
                  type="date"
                  name="due_date"
                  value={itemData.due_date}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Payment status</th>
              </td>
              <td>
                <input
                  type="text"
                  name="payment_status"
                  value={itemData.payment_status}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Items</th>
              </td>
              <td>
                <input
                  type="text"
                  name="items"
                  value={itemData.items}
                  onChange={handleItemChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Add Item</button>
      </form>
    </>
  );
};

export default AddBill;
