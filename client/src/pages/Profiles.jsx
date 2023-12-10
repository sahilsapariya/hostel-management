import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Profiles.scss";

const Profiles = () => {
  const [profile, setProfile] = useState("students");
  const [selectedButton, setSelectedButton] = useState("students");

  const [students, setStudents] = useState(null);
  const [guards, setGuards] = useState(null);
  const [cleaners, setCleaners] = useState(null);
  const [cooks, setCooks] = useState(null);

  const getStudents = () => {
    try {
      axios
        .get("http://localhost:8000/profiles/students", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => resp)
        .then((data) => setStudents(data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  const getCleaners = () => {
    const cleaners = [
      { name: "John", age: "16" },
      { name: "Kevin", age: "20" },
    ];

    setCleaners(cleaners);
  };

  const getGuards = () => {
    const guards = [
      { name: "Brian", age: "16" },
      { name: "Alexander", age: "20" },
    ];

    setGuards(guards);
  };

  const getCooks = () => {
    const cooks = [
      { name: "Alice", age: "16" },
      { name: "Bob", age: "20" },
    ];

    setCooks(cooks);
  };

  useEffect(() => {
    getStudents();
    getCleaners();
    getCooks();
    getGuards();
  }, []);

  return (
    <div className="profile__container">
      <div className="profile_selector__container">
        <div className="profiles">
        <button
            type="button"
            onClick={() => {
              setProfile("students");
              setSelectedButton("students");
            }}
            style={{ borderStyle: selectedButton === "students" ? "solid" : "dashed" }}
          >
            Students
          </button>
          <button
            type="button"
            onClick={() => {
              setProfile("cleaners");
              setSelectedButton("cleaners");
            }}
            style={{ borderStyle: selectedButton === "cleaners" ? "solid" : "dashed" }}
          >
            Cleaners
          </button>
          <button
            type="button"
            onClick={() => {
              setProfile("cooks");
              setSelectedButton("cooks");
            }}
            style={{ borderStyle: selectedButton === "cooks" ? "solid" : "dashed" }}
          >
            Cooks
          </button>
          <button
            type="button"
            onClick={() => {
              setProfile("guards");
              setSelectedButton("guards");
            }}
            style={{ borderStyle: selectedButton === "guards" ? "solid" : "dashed" }}
          >
            Guards
          </button>
        </div>
      </div>

      <div className="profile_header">
        <h2>{profile.toUpperCase()}</h2>
      </div>

      <hr />
      <ul>
        {profile === "students" &&
          students?.map((student, index) => {
            return <li key={index}>{student.name}</li>;
          })}
        {profile === "cleaners" &&
          cleaners?.map((cleaner, index) => {
            return <li key={index}>{cleaner.name}</li>;
          })}
        {profile === "cooks" &&
          cooks?.map((cook, index) => {
            return <li key={index}>{cook.name}</li>;
          })}
        {profile === "guards" &&
          guards?.map((guard, index) => {
            return <li key={index}>{guard.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default Profiles;
