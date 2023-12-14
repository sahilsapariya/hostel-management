import React from "react";
import UpdateStudent from "./UpdateStudent";
import UpdateCleaner from "./UpdateCleaner";
import UpdateCook from "./UpdateCook";
import UpdateGuard from "./UpdateGuard";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

const UpdatePerson = () => {

  const {category, id} = useParams()

  const { data } = useFetch(`http://127.0.0.1:8000/profiles/${category.slice(0, category.length - 1)}/${id}/`)

  return (
    <div className="information__container">
      <div className="profile_header">
        <h2>Update {category.slice(0, category.length - 1)}</h2>
      </div>


      {category === "students" ? (
        <UpdateStudent data={data} />
      ) : category === "cleaners" ? (
        <UpdateCleaner data={data} />
      ) : category === "cooks" ? (
        <UpdateCook data={data} />
      ) : category === "guards" ? (
        <UpdateGuard data={data} />
      ) : null}
    </div>
  );
};

export default UpdatePerson;
