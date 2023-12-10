import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyMTM0Nzk1LCJpYXQiOjE3MDIxMjc1OTUsImp0aSI6IjA2YTYzNTc1NTMzZjRlYjBiNjU0MTM2MzNlMmY3ZjI0IiwidXNlcl9pZCI6MX0.C0G_GUxkOrdNj7HnD3Q3TwyNFvt0xX07V2EipfeOlCs"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
        });

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  // console.log(data)

  return { data, loading, error };
};

export default useFetch;

