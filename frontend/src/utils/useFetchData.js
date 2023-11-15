// useFetchData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url) => {

  const rootUrl = 'http://127.0.0.1:8000/api/';
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const config = {
      headers: {
          'Content-Type': 'application/json'
      }
  };
    const fetchData = async () => {
      try {
        const response = await axios.get(rootUrl + url, config);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
