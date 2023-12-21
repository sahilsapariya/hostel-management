import React, { useEffect, useState } from "react";
import "../../styles/Profiles.scss";

import useFetch from "../../hooks/useFetch";

import { useSnapshot } from "valtio";
import { store } from "../../context/state";
import { useNavigate } from "react-router-dom";

const Profiles = () => {
  const snap = useSnapshot(store);

  const [profile, setProfile] = useState("students");
  const [selectedButton, setSelectedButton] = useState("students");


  const {
    data: studentsData,
    loading: studentLoading,
    error: studentError,
  } = useFetch("http://localhost:8000/profiles/students");
  const {
    data: cooksData,
    loading: cooksLoading,
    error: cooksError,
  } = useFetch("http://localhost:8000/profiles/cooks");
  const {
    data: guardsData,
    loading: guardsLoading,
    error: guardsError,
  } = useFetch("http://localhost:8000/profiles/guards");
  const {
    data: cleanersData,
    loading: cleanersLoading,
    error: cleanersError,
  } = useFetch("http://localhost:8000/profiles/cleaners");

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
      <div className="profile_selector__container">
        <div className="profiles_options">
          <button
            type="button"
            onClick={() => {
              setProfile("students");
              setSelectedButton("students");
            }}
            style={{
              borderStyle: selectedButton === "students" ? "solid" : "dashed",
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
              borderStyle: selectedButton === "cleaners" ? "solid" : "dashed",
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
              borderStyle: selectedButton === "cooks" ? "solid" : "dashed",
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
              borderStyle: selectedButton === "guards" ? "solid" : "dashed",
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

  return (
    <div className="profiles items_list">
      <div className="profile_header">
        <h2>{profile}</h2>
      </div>

      <button type="button" onClick={() => navigate(`/profiles/${profile}/add`)}>
        Add
      </button>

      <ul>
        {profile === "students" &&
          students?.map((student, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/profiles/students/${student.id}`)}
              >
                {student.name}
              </li>
            );
          })}
        {profile === "cleaners" &&
          cleaners?.map((cleaner, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/profiles/cleaners/${cleaner.id}`)}
              >
                {cleaner.name}
              </li>
            );
          })}
        {profile === "cooks" &&
          cooks?.map((cook, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/profiles/cooks/${cook.id}`)}
              >
                {cook.name}
              </li>
            );
          })}
        {profile === "guards" &&
          guards?.map((guard, index) => {
            return (
              <li
                key={index}
                onClick={() => navigate(`/profiles/guards/${guard.id}`)}
              >
                {guard.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Profiles;
