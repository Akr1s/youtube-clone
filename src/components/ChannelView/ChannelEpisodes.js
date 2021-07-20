import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "../../styles/ChannelEpisodes.module.css";
import Episode from "../VideoPlayerView/Episode";

function ChannelEpisodes({ id, name, image }) {
  const url = `https://api.tvmaze.com/shows/${id}/episodes`;
  const { result, error } = useFetch(url);
  if (error) return <h2>There is an error</h2>;
  if (!result) return <h2>Loading...</h2>;
  return (
    <div className={styles.container}>
      {result.map((episode) => (
        <Episode
          name={name}
          image={image}
          episode={episode.name}
          key={episode.id}
        />
      ))}
    </div>
  );
}

export default ChannelEpisodes;
