import { useState } from "react";
// import axios from "axios"


const AddProfile = (url, data) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  alert(url)

  // const addData = async (url, data) => {
  //   try {
  //     console.log(url);
  //     const response = await axios.post(url, data, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     console.log("profile added successfully");
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const addData = async (url, data) => {
    try {
      console.log(url)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("profile added successfully");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  addData(url, data);

  return { loading, error };
};

export default AddProfile;
