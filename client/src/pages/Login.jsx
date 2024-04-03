import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import baseurl from "../config";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post(`${baseurl}/api/token/`, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.access);
      })
      .catch((error) => console.error(error));
    navigate("/");
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="container">
      <div className="main__container">
        <h1>Welcome</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="sahilsapariya"
            value={formData.username}
            onChange={handleChange}
          />

          <br />
          <input
            type="password"
            name="password"
            placeholder="sahil1203"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
