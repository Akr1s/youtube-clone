import React from "react";
import useFetch from "../../../hooks/useFetch";
import Episode from "../../VideoPlayerView/Episode";
import { Container } from "./Styles";

function ChannelEpisodes({ id, name, image }) {
  const url = `https://api.tvmaze.com/shows/${id}/episodes`;
  const { result, error } = useFetch(url);
  if (error) return <h2>There is an error</h2>;
  if (!result) return <h2>Loading...</h2>;
  return (
    <Container>
      {result.map((episode) => (
        <Episode
          name={name}
          image={image}
          episode={episode.name}
          key={episode.id}
        />
      ))}
    </Container>
  );
}

export default ChannelEpisodes;
