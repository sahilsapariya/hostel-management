import React, { useEffect, useState } from "react";
import "../../styles/Profiles.scss";

import useFetch from "../../hooks/useFetch";

import { useSnapshot } from "valtio";
import { store } from "../../context/state";
import { useNavigate } from "react-router-dom";
import baseurl from "../../config";

import AddIcon from "../../assets/icons/addnormal.svg";
import AddIconHover from "../../assets/icons/add.svg";

const Profiles = () => {
  const snap = useSnapshot(store);

  const [profile, setProfile] = useState("students");
  const [selectedButton, setSelectedButton] = useState("students");

  const {
    data: studentsData,
    loading: studentLoading,
    error: studentError,
  } = useFetch(`${baseurl}/profiles/students/`);
  const {
    data: cooksData,
    loading: cooksLoading,
    error: cooksError,
  } = useFetch(`${baseurl}/profiles/cooks/`);
  const {
    data: guardsData,
    loading: guardsLoading,
    error: guardsError,
  } = useFetch(`${baseurl}/profiles/guards/`);
  const {
    data: cleanersData,
    loading: cleanersLoading,
    error: cleanersError,
  } = useFetch(`${baseurl}/profiles/cleaners/`);

  useEffect(() => {
    store.students = studentsData;
    store.guards = guardsData;
    store.cleaners = cleanersData;
    store.cooks = cooksData;
  }, [studentsData, cooksData, guardsData, cleanersData]);

  if (studentError || cooksError || cleanersError || guardsError) {
    return <div>{"error occured: " + studentError}</div>;
  }
  if (studentLoading || cooksLoading || guardsLoading || cleanersLoading) {
    return <div>Loading...</div>;
  }

  const students = snap.students;
  const cooks = snap.cooks;
  const guards = snap.guards;
  const cleaners = snap.cleaners;

  return (
    <div className="profile__container">
      <h2>Profiles</h2>

      <div className="profile_selector__container">
        <div className="profiles_options">
          <button
            type="button"
            onClick={() => {
              setProfile("students");
              setSelectedButton("students");
            }}
            style={{
              border:
                selectedButton === "students" ? "solid #404040 1px" : "none",
              background: selectedButton === "students" ? "#2D2D2D" : "#D9D9D9",
              color: selectedButton === "students" ? "white" : "black",
            }}
          >
            Students
          </button>
          <button
            type="button"
            onClick={() => {
              setProfile("cleaners");
              setSelectedButton("cleaners");
            }}
            style={{
              border:
                selectedButton === "cleaners" ? "solid #404040 1px" : "none",
              background: selectedButton === "cleaners" ? "#2D2D2D" : "#D9D9D9",
              color: selectedButton === "cleaners" ? "white" : "black",
            }}
          >
            Cleaners
          </button>
          <button
            type="button"
            onClick={() => {
              setProfile("cooks");
              setSelectedButton("cooks");
            }}
            style={{
              border: selectedButton === "cooks" ? "solid #404040 1px" : "none",
              background: selectedButton === "cooks" ? "#2D2D2D" : "#D9D9D9",
              color: selectedButton === "cooks" ? "white" : "black",
            }}
          >
            Cooks
          </button>
          <button
            type="button"
            onClick={() => {
              setProfile("guards");
              setSelectedButton("guards");
            }}
            style={{
              border:
                selectedButton === "guards" ? "solid #404040 1px" : "none",
              background: selectedButton === "guards" ? "#2D2D2D" : "#D9D9D9",
              color: selectedButton === "guards" ? "white" : "black",
            }}
          >
            Guards
          </button>
        </div>
      </div>

      <hr />

      <ProfilesList
        profile={profile}
        students={students}
        cleaners={cleaners}
        cooks={cooks}
        guards={guards}
      />
    </div>
  );
};

const ProfilesList = ({ profile, students, cooks, cleaners, guards }) => {
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const iconSource = isHovered ? AddIconHover : AddIcon;

  return (
    <div className="profiles">
      <div className="profile_header">
        <h1>{profile}</h1>

        <img
          src={iconSource}
          alt={`add ${profile}`}
          title={`Add ${profile}`}
          onClick={() => navigate(`/profiles/${profile}/add`)}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        />
      </div>

      {/* <button
        type="button"
        onClick={() => navigate(`/profiles/${profile}/add`)}
      >
        Add
      </button> */}

      <table className="table__container">
      <colgroup>
          <col style={{ width: "50px" }} />
          <col style={{ width: "calc(100% - 50px)" }} />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
          </tr>
        </thead>

        <tbody>
          {profile === "students" &&
            students?.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td
                    onClick={() => navigate(`/profiles/students/${student.id}`)}
                  >
                    {student.name}
                  </td>
                </tr>
              );
            })}
          {profile === "cleaners" &&
            cleaners?.map((cleaner, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td
                    onClick={() => navigate(`/profiles/cleaners/${cleaner.id}`)}
                  >
                    {cleaner.name}
                  </td>
                </tr>
              );
            })}
          {profile === "guards" &&
            guards?.map((guard, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td onClick={() => navigate(`/profiles/guards/${guard.id}`)}>
                    {guard.name}
                  </td>
                </tr>
              );
            })}
          {profile === "cooks" &&
            cooks?.map((cook, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td onClick={() => navigate(`/profiles/cooks/${cook.id}`)}>
                    {cook.name}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Profiles;
