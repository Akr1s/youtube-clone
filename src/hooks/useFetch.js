import { useState, useEffect } from "react";

export default function useFetch(url) {
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
  }, []);

  return { result, error };
}
