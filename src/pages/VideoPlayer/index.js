import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { formatArrayLength } from "../../utils";
import Video from "../../components/VideoPlayerView/Video";
import VideoInfo from "../../components/VideoPlayerView/VideoInfo";
import Episode from "../../components/VideoPlayerView/Episode";
import useFetch from "../../hooks/useFetch";
import { push } from "../../features/history/historySlice";
import { useEffect } from "react";
import useVideoWithParams from "../../hooks/useVideoWithParams";
import { Container, Left, Right, RightContent, RightTitle } from "./Styles";

function VideoPlayer() {
  const dispatch = useDispatch();
  const params = useParams();
  const video = useVideoWithParams(params);
  const url = `https://api.tvmaze.com/shows/${video.showId}/episodes`;

  useEffect(() => {
    dispatch(push(video));
  }, [video, dispatch]);

  const { result, error } = useFetch(url);

  if (error)
    return <Container>There is an error. Please, reload the pages</Container>;
  if (!result) return <Container>...Loading</Container>;
  const formattedResult = formatArrayLength(result);
  return (
    <Container>
      <Left>
        <Video poster={video.image} title={video.name} />
        <VideoInfo
          episode={video.episode}
          title={video.name}
          summary={video.summary}
          date={video.date}
          showId={video.showId}
        />
      </Left>
      <Right>
        <RightTitle>Enother episodes</RightTitle>
        <RightContent>
          {formattedResult.map((episode) => (
            <Episode
              key={episode.id}
              name={episode.name}
              image={video.image}
              episode={episode.episode}
            />
          ))}
        </RightContent>
      </Right>
    </Container>
  );
}

export default VideoPlayer;
