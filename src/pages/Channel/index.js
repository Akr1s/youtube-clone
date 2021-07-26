import React from "react";
import { useParams } from "react-router-dom";
import ChannelEpisodes from "../../components/ChannelView/ChannelEpisodes";
import ChannelHeader from "../../components/ChannelView/ChannelHeader";
import useFetch from "../../hooks/useFetch";

function Channel() {
  const params = useParams();
  const id = params.id.slice(1);
  const url = `https://api.tvmaze.com/shows/${id}`;

  const { result, error } = useFetch(url);
  if (error) return <h2>There is an error</h2>;
  if (!result) return <h2>Loading...</h2>;
  return (
    <div>
      <ChannelHeader
        image={result.image.medium}
        name={result.name}
        subscribersAmount={result.weight}
      />
      <ChannelEpisodes id={id} name={result.name} image={result.image.medium} />
    </div>
  );
}

export default Channel;
