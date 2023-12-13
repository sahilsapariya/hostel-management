import React from "react";
import Student from "./Student";
import Cooks from "./Cooks";
import Cleaners from "./Cleaners";
import Guard from "./Guard";


const Information = ({
  profile,
  selectedButton: userCategory,
  setAddProfile,
  setUpdateProfile,
  setInformation,
  setListProfiles,
}) => {
  const data = profile;
  const category = userCategory;

  const handleDeleteProfile = (id) => {
    const isConfirm = window.confirm(
      "Are you sure you want to delete this profile?"
    );

    if (isConfirm) {
      fetch(
        `http://localhost:8000/profiles/${category.slice(
          0,
          category.length - 1
        )}/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
        .then((resp) => resp)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

      setInformation(false);
      setListProfiles(true);

      // if (category === "students") getStudents();
      // else if (category === "cooks") getCooks();
      // else if (category === "cleaners") getCleaners();
      // else if (category === "guards") getGuards();
    }
  };

  return (
    <div className="information__container">
      <div className="profile_header">
        <h2>{category.slice(0, category.length - 1)}</h2>
      </div>
      <div className="operations_buttons">
        <button
          type="button"
          onClick={() => {
            setInformation(false);
            setUpdateProfile(true);
          }}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteProfile(data.id)}>
          Delete
        </button>
      </div>
      {category === "students" ? (
        <Student
          data={data}
          setAddProfile={setAddProfile}
          setUpdateProfile={setUpdateProfile}
        />
      ) : category === "cleanes" ? (
        <Cleaners
          data={data}
          setAddProfile={setAddProfile}
          setUpdateProfile={setUpdateProfile}
        />
      ) : category === "cooks" ? (
        <Cooks
          data={data}
          setAddProfile={setAddProfile}
          setUpdateProfile={setUpdateProfile}
        />
      ) : category === "guards" ? (
        <Guard
          data={data}
          setAddProfile={setAddProfile}
          setUpdateProfile={setUpdateProfile}
        />
      ) : null}
    </div>
  );
};

export default Information;
