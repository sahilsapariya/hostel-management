import React from "react";
import UpdateStudent from "./UpdateStudent";
import UpdateCleaner from "./UpdateCleaner";
import UpdateCook from "./UpdateCook";
import UpdateGuard from "./UpdateGuard";

const UpdatePerson = ({
  profile,
  selectedButton: userCategory,
  setAddProfile,
  setUpdateProfile,
  setInformation
}) => {
  const data = profile;
  const category = userCategory;

  return (
    <div className="information__container">
      <div className="profile_header">
        <h2>"update" + {category.slice(0, category.length - 1)}</h2>
      </div>

      <div className="operations_buttons">
        <button
          type="button"
          onClick={() => {
            setInformation(false);
            setAddProfile(true);
          }}
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => {
            setInformation(false);
            setUpdateProfile(true);
          }}
        >
          Edit
        </button>
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
