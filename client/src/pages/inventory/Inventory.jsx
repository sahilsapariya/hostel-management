import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/Inventory.scss";
import baseurl from "../../config";
import useFetch from "../../hooks/useFetch";

const Inventory = () => {
  const navigate = useNavigate();

  const { data: items, loading, error } = useFetch(`${baseurl}/inventory/`);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Some thing went wrong : {error}</div>;

  return (
    <div>
      <div className="page_header">
        <h1>Inventory Items</h1>
      </div>

      <div className="seperation_section">
        <button type="button" onClick={() => navigate("/inventory/add")}>
          Add Item
        </button>
        <hr />
      </div>

      <div className="items_list">
        <ul>
          {items.map((item) => (
            <li key={item.id} onClick={() => navigate(`/inventory/information/${item.id}`)}>
              Item: {item.item_name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inventory;