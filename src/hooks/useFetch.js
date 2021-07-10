import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResult(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);

  return { result, error };
};

export default useFetch;
