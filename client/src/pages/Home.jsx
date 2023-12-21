import React from "react";

import "../styles/Home.scss";

const Home = () => {
  return <div className="home__container">
    <div className="numbers">
      <div className="box">
        <p>No of students</p>
        <p>10</p>
      </div>
      <div className="box">
        <p>No of cleaners</p>
        <p>1</p>
      </div>
      <div className="box">
        <p>No of cooks</p>
        <p>4</p>
      </div>
      <div className="box">
        <p>No of guards</p>
        <p>2</p>
      </div>
      <div className="box">
        <p>No of rooms</p>
        <p>5</p>
      </div>
    </div>
  </div>;
};

export default Home;
