import React from "react";

import "../styles/Home.scss";
import baseurl from "../config";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, loading, error } = useFetch(`${baseurl}/`);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>error occurded: {error}</div>;

  return (
    <div className="home__container">
      <div className="numbers">
        <div className="box">
          <p>No of students</p>
          <p>{data?.students}</p>
        </div>
        <div className="box">
          <p>No of cleaners</p>
          <p>{data?.cleaners}</p>
        </div>
        <div className="box">
          <p>No of cooks</p>
          <p>{data?.cooks}</p>
        </div>
        <div className="box">
          <p>No of guards</p>
          <p>{data?.guards}</p>
        </div>
        <div className="box">
          <p>No of rooms</p>
          <p>{data?.rooms}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
