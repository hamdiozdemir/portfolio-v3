// useFetchData.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { getRootUrl } from './utils';

const useFetchData = (url) => {
  const rootUrl = getRootUrl('http://localhost');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
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

  }, [url]); // Include payload in the dependency array

  return { data, loading, error };
};

export default useFetchData;
