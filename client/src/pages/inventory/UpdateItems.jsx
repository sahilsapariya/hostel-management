import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import baseurl from "../../config";
import useFetch from "../../hooks/useFetch";
import { updateData } from "../../hooks/useUpdate";

const UpdateItems = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    data: initialData,
    loading,
    error,
  } = useFetch(`${baseurl}/inventory/${id}/`);

  const [itemData, setItemData] = useState({
    item_name: "",
    category: "",
    quantity: 0,
    unit: "",
    purchase_price: 0,
    purchase_date: "",
    vendor_name: "",
    vendor_phone_number: "",
    minimum_stock: 0,
    status: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    setItemData(initialData);
  }, [initialData]);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Something went wrong : {error}</div>;

  return (
    <>
      <div className="page_header">
        <h1>Update Room</h1>
      </div>
      <form
        onSubmit={() => {
          updateData(`${baseurl}/inventory/${id}/`, itemData);
          navigate(`/inventory/information/${id}`);
        }}
      >
        <table className="information_table">
          <tbody>
            <tr>
              <td>
                <th>Item name</th>
              </td>
              <td>
                <input
                  type="text"
                  name="item_name"
                  value={itemData?.item_name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Category</th>
              </td>
              <td>
                <input
                  type="text"
                  name="category"
                  value={itemData?.category}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Quantity</th>
              </td>
              <td>
                <input
                  type="number"
                  name="quantity"
                  value={itemData?.quantity}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Unit</th>
              </td>
              <td>
                <input
                  type="text"
                  name="unit"
                  value={itemData?.unit}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Purchase Price</th>
              </td>
              <td>
                <input
                  type="number"
                  name="purchase_price"
                  value={itemData?.purchase_price}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Purchase Date</th>
              </td>
              <td>
                <input
                  type="date"
                  name="purchase_date"
                  value={itemData?.purchase_date}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Vendor Name</th>
              </td>
              <td>
                <input
                  type="text"
                  name="vendor_name"
                  value={itemData?.vendor_name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Vendor Phone Number</th>
              </td>
              <td>
                <input
                  type="tel"
                  name="vendor_phone_number"
                  value={itemData?.vendor_phone_number}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Minimum Stock</th>
              </td>
              <td>
                <input
                  type="number"
                  name="minimum_stock"
                  value={itemData?.minimum_stock}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Status</th>
              </td>
              <td>
                <input
                  type="text"
                  name="status"
                  value={itemData?.status}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <th>Notes</th>
              </td>
              <td>
                <textarea
                  name="notes"
                  value={itemData?.notes}
                  onChange={handleChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Update Item</button>
      </form>
    </>
  );
};

export default UpdateItems;
