import React from "react";

import "../styles/About.scss";
import Profile from "../assets/user1.png";

const About = () => {
  return (
    <div className="about__container">
      <div className="information__container"></div>
      <div className="photo__container">
        <svg
          id="sw-js-blob-svg"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="profile_blob"
        >
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop
                id="stop1"
                stop-color="rgba(248, 117, 55, 1)"
                offset="0%"
              ></stop>
              <stop
                id="stop2"
                stop-color="rgba(233, 147, 86, 1)"
                offset="100%"
              ></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            d="M14.7,-23.4C20.8,-22,28.5,-21.5,32.6,-17.7C36.7,-13.9,37.2,-7,35.1,-1.3C32.9,4.5,28,8.9,24.9,14.3C21.7,19.8,20.2,26.1,16.4,31.2C12.5,36.3,6.2,40,-1,41.8C-8.2,43.5,-16.4,43.1,-20.8,38.3C-25.1,33.5,-25.6,24.3,-29.8,17.2C-34,10.1,-41.9,5,-41.6,0.1C-41.4,-4.8,-33,-9.5,-28.4,-15.9C-23.9,-22.3,-23,-30.4,-18.9,-32.9C-14.8,-35.4,-7.4,-32.2,-1.5,-29.5C4.3,-26.9,8.7,-24.7,14.7,-23.4Z"
            width="100%"
            height="100%"
            transform="translate(50 50)"
            stroke-width="0"
            style={{ transition: "all 0.3s ease 0s" }}
            stroke="url(#sw-gradient)"
          ></path>
        </svg>
        <img src={Profile} x="10" y="-10" className="profile_img" alt="profile-photo" />
      </div>
    </div>
  );
};

export default About;
