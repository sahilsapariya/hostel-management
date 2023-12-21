import React from "react";
import Student from "./Student";
import Cooks from "./Cooks";
import Cleaners from "./Cleaners";
import Guard from "./Guard";

import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { DeleteProfile } from "../../../hooks/deleteProfile";

const Information = () => {
  const { category, id } = useParams();

  const { data } = useFetch(
    `http://127.0.0.1:8000/profiles/${category.slice(
      0,
      category.length - 1
    )}/${id}/`
  );

  const navigate = useNavigate();

  return (
    <div className="information__container">
      <div className="profile_header">
        <h2>{category.slice(0, category.length - 1)}</h2>
      </div>
      <div className="operations_buttons">
        <button
          type="button"
          onClick={() => navigate(`/profiles/${category.slice(0, category.length - 1)}/update/${data?.id}`)}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => {
            DeleteProfile(`http://localhost:8000/profiles/${category}/${id}/}`);
            navigate("/profiles");
          }}
        >
          Delete
        </button>
      </div>
      {category === "students" ? (
        <Student data={data} />
      ) : category === "cleaners" ? (
        <Cleaners data={data} />
      ) : category === "cooks" ? (
        <Cooks data={data} />
      ) : category === "guards" ? (
        <Guard data={data} />
      ) : null}
    </div>
  );
};

export default Information;
