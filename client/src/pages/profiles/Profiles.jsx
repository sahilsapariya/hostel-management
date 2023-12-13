import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Profiles.scss";
import Information from "./information/Information";
import AddPerson from "./operation/add/AddPerson";
import UpdatePerson from "./operation/update/UpdatePerson";

const Profiles = () => {
  const [profile, setProfile] = useState("students");
  const [selectedButton, setSelectedButton] = useState("students");

  const [students, setStudents] = useState(null);
  const [guards, setGuards] = useState(null);
  const [cleaners, setCleaners] = useState(null);
  const [cooks, setCooks] = useState(null);

  const [listProfiles, setListProfiles] = useState(true);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [information, setInformation] = useState(false);
  const [addProfile, setAddProfile] = useState(false);
  const [updateProfile, setUpdateProfile] = useState(false);

  const setToList = () => {
    setListProfiles(true);
    setSelectedProfile(null);
    setInformation(false);
    setAddProfile(false);
    setUpdateProfile(false);
  };

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
    try {
      axios
        .get("http://localhost:8000/profiles/cleaners", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => resp)
        .then((data) => setCleaners(data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  const getGuards = () => {
    try {
      axios
        .get("http://localhost:8000/profiles/guards", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => resp)
        .then((data) => setGuards(data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
  };

  const getCooks = () => {
    try {
      axios
        .get("http://localhost:8000/profiles/cooks", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((resp) => resp)
        .then((data) => setCooks(data.data))
        .catch((err) => console.log(err));
    } catch (error) {
      console.error(error);
    }
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
        <div className="profiles_options">
          <button
            type="button"
            onClick={() => {
              setProfile("students");
              setSelectedButton("students");
              setToList();
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
              setToList();
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
              setToList();
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
              setToList();
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

      {listProfiles && (
        <ProfilesList
          profile={profile}
          students={students}
          cleaners={cleaners}
          cooks={cooks}
          guards={guards}
          setListProfiles={setListProfiles}
          setSelectedProfile={setSelectedProfile}
          setInformation={setInformation}
          setAddProfile={setAddProfile}
        />
      )}

      {information && (
        <Information
          profile={selectedProfile}
          selectedButton={selectedButton}
          setAddProfile={setAddProfile}
          setInformation={setInformation}
          setUpdateProfile={setUpdateProfile}
          setListProfiles={setListProfiles}
        />
      )}

      {addProfile && (
        <AddPerson
          selectedButton={selectedButton}
          setAddProfile={setAddProfile}
          setInformation={setInformation}
          setUpdateProfile={setUpdateProfile}
        />)}

      {updateProfile && (
        <UpdatePerson
          profile={selectedProfile}
          selectedButton={selectedButton}
          setAddProfile={setAddProfile}
          setInformation={setInformation}
          setUpdateProfile={setUpdateProfile}
        />)}
    </div>
  );
};

const ProfilesList = ({
  profile,
  setSelectedProfile,
  setListProfiles,
  students,
  cooks,
  cleaners,
  guards,
  setInformation,
  setAddProfile,
}) => {
  return (
    <div className="profiles">
      <div className="profile_header">
        <h2>{profile}</h2>
      </div>

      <button
          type="button"
          onClick={() => {
            setListProfiles(false);
            setAddProfile(true);
          }}
        >
          Add
        </button>

      <ul>
        {profile === "students" &&
          students?.map((student, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  setSelectedProfile(student);
                  setListProfiles(false);
                  setInformation(true);
                }}
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
                onClick={() => {
                  setSelectedProfile(cleaner);
                  setListProfiles(false);
                  setInformation(true);
                }}
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
                onClick={() => {
                  setSelectedProfile(cook);
                  setListProfiles(false);
                  setInformation(true);
                }}
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
                onClick={() => {
                  setSelectedProfile(guard);
                  setListProfiles(false);
                  setInformation(true);
                }}
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
