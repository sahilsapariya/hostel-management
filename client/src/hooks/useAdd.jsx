import { useState } from "react";

const AddProfile = (url, data) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addData = async (url, data) => {
    try {
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
