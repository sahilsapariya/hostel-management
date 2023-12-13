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
}) => {
  const data = profile;
  const category = userCategory;

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
