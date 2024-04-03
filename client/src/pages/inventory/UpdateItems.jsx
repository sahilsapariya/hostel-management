import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import baseurl from "../../config";
import useFetch from "../../hooks/useFetch";
import { updateData } from "../../hooks/useUpdate";
import Loading from "../../components/Loading";

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

  if (loading) return <Loading />;

  if (error) return <div>Something went wrong : {error}</div>;

  return (
    <div className="inventory__container">
      <div className="profile_header">
        <h1>Update Item</h1>
      </div>
      <form
        onSubmit={() => {
          updateData(`${baseurl}/inventory/${id}/`, itemData);
          navigate(`/inventory/information/${id}`);
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
              <th>Item name</th>
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
              <th>Category</th>
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
              <th>Quantity</th>
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
              <th>Unit</th>
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
              <th>Purchase Price</th>
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
              <th>Purchase Date</th>
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
              <th>Vendor Name</th>
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
              <th>Vendor Phone Number</th>
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
              <th>Minimum Stock</th>
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
              <th>Status</th>
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
              <th>Notes</th>
              <td>
                <textarea
                  name="notes"
                  rows={4}
                  cols={30}
                  value={itemData?.notes}
                  onChange={handleChange}
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

export default UpdateItems;
