import React from "react";
import UpdateStudent from "./UpdateStudent";
import UpdateCleaner from "./UpdateCleaner";
import UpdateCook from "./UpdateCook";
import UpdateGuard from "./UpdateGuard";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";

const UpdatePerson = () => {
  const { category, id } = useParams();

  const { data, loading, error } = useFetch(
    `http://127.0.0.1:8000/profiles/${category}/${id}/`
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="information__container">
      <div className="profile_header">
        <h2>Update {category}</h2>
      </div>

      {category === "student" ? (
        <UpdateStudent data={data} />
      ) : category === "cleaner" ? (
        <UpdateCleaner data={data} />
      ) : category === "cook" ? (
        <UpdateCook data={data} />
      ) : category === "guard" ? (
        <UpdateGuard data={data} />
      ) : null}
    </div>
  );
};

export default UpdatePerson;
