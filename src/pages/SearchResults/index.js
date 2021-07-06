import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import SingleResult from "../../components/Search/SingleResult";
import styles from "../../styles/SearchResults.module.css";

function SearchResults() {
  const term = useSelector((state) => state.term);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const url = "http://api.tvmaze.com/search/shows?q=";

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoadingError(false);
        const response = await fetch(url + term);
        const results = await response.json();
        setResults(results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setLoadingError(true);
      }
    };
    fetchResults();
  }, [term]);
  if (loading) return <div>Loading...</div>;
  if (loadingError)
    return <div>There is an error, try to refresh the page</div>;
  if (results.length === 0) return <div>Sorry, we cant fing anything</div>;
  return (
    <div>
      <h2 className={styles.searchCounter}>Search results: {results.length}</h2>
      <div className={styles.results}>
        {results.map((result) => {
          const image =
            result.show.image?.medium || "https://picsum.photos/210/295";
          const name = result.show.name;
          return (
            <SingleResult image={image} name={name} key={result.show.id} />
          );
        })}
      </div>
    </div>
  );
}

export default SearchResults;
