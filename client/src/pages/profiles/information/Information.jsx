import React from "react";
import Student from "./Student";
import Cooks from "./Cooks";
import Cleaners from "./Cleaners";
import Guard from "./Guard";

import "../../../styles/Profiles.scss";

import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import baseurl from "../../../config";

const Information = () => {
  const { category, id } = useParams();

  const { data } = useFetch(
    `${baseurl}/profiles/${category.slice(0, category.length - 1)}/${id}/`
  );

  return (
    <div className="information__container">
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
