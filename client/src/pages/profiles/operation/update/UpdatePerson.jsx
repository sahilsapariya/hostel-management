import React from "react";
import UpdateStudent from "./UpdateStudent";
import UpdateCleaner from "./UpdateCleaner";
import UpdateCook from "./UpdateCook";
import UpdateGuard from "./UpdateGuard";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import baseurl from "../../../../config";
import Loading from "../../../../components/Loading";

const UpdatePerson = () => {
  const { category, id } = useParams();

  const { data, loading, error } = useFetch(
    `${baseurl}/profiles/${category}/${id}/`
  );

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="information__container">
      <div className="profile_header">
        <h1>Update {category}</h1>
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
