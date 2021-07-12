import React from "react";
import { useSelector } from "react-redux";
import SingleResult from "../../components/Search/SingleResult";
import useFetch from "../../hooks/useFetch";
import useToTop from "../../hooks/useToTop";
import styles from "../../styles/SearchResults.module.css";

function SearchResults() {
  const term = useSelector((state) => state.term);
  const url = "https://api.tvmaze.com/search/shows?q=";
  useToTop();

  const { result, error } = useFetch(url + term);
  if (error) return <div>There is an error, try to refresh the page</div>;
  if (!result) return <div>Loading...</div>;
  if (result.length === 0) return <div>Sorry, we cant fing anything</div>;
  return (
    <div>
      <h2 className={styles.searchCounter}>Search results: {result.length}</h2>
      <div className={styles.results}>
        {result.map((item) => {
          const image =
            item.show.image?.medium || "https://picsum.photos/210/295";
          const name = item.show.name;
          return <SingleResult image={image} name={name} key={item.show.id} />;
        })}
      </div>
    </div>
  );
}

export default SearchResults;
