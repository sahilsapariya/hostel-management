import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Profiles.scss";

import useFetch from "../hooks/useFetch";

const Profiles = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const { data, loading, error } = useFetch("http://127.0.0.1:8000/profiles/students");

  useEffect(() => {
    axios
      .get("http://localhost:8000/profiles/students", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyMTM0Nzk1LCJpYXQiOjE3MDIxMjc1OTUsImp0aSI6IjA2YTYzNTc1NTMzZjRlYjBiNjU0MTM2MzNlMmY3ZjI0IiwidXNlcl9pZCI6MX0.C0G_GUxkOrdNj7HnD3Q3TwyNFvt0xX07V2EipfeOlCs`,
        },
      })
      .then((resp) => resp)
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  return (
    <div className="profile__container">
      <div className="profile_selector__container">
        <div className="profiles">
          <button type="button">Students</button>
          <button type="button">Cleaners</button>
          <button type="button">Cooks</button>
          <button type="button">Guards</button>
        </div>
      </div>

      <div className="profile_header">
        <h2>Students</h2>
      </div>

      <hr />

      {data?.map((student, index) => {
        return (
          <div key={index}>
            {student.name}
            {student.address}
            {student.blood_group}
            {student.phone}
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Profiles;
