import React from "react";
import AddStudent from "./AddStudent";
import AddCleaner from "./AddCleaner";
import AddCook from "./AddCook";
import AddGuard from "./AddGuard";

import "../../../../styles/Profiles.scss";

import { useParams } from "react-router-dom";

const AddPerson = () => {
  const { category } = useParams();

  return (
    <div className="information__container">
      <div className="profile_header">
        <h1>{"add " + category.slice(0, category.length - 1)}</h1>
      </div>

      {category === "students" ? (
        <AddStudent />
      ) : category === "cleaners" ? (
        <AddCleaner />
      ) : category === "cooks" ? (
        <AddCook />
      ) : category === "guards" ? (
        <AddGuard />
      ) : null}
    </div>
  );
};

export default AddPerson;
