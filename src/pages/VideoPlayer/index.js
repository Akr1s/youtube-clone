import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "../../styles/VideoPlayer.module.css";
import { formatArrayLength } from "../../utils";
import Video from "../../components/VideoPlayerView/Video";
import VideoInfo from "../../components/VideoPlayerView/VideoInfo";
import Episode from "../../components/VideoPlayerView/Episode";
import useFetch from "../../hooks/useFetch";
import useToTop from "../../hooks/useToTop";

function VideoPlayer() {
  const params = useParams();
  const id = +params.id.slice(1);
  const videos = useSelector((state) => state.videos);
  const video = videos.find((item) => item.id === id);
  const url = `https://api.tvmaze.com/shows/${video.showId}/episodes`;
  useToTop();

  const { result, error } = useFetch(url);

  if (error)
    return (
      <div className={styles.videoPlayer}>
        There is an error. Please, reload the pages
      </div>
    );
  if (!result) return <div className={styles.videoPlayer}>...Loading</div>;
  const formattedResult = formatArrayLength(result);
  return (
    <div className={styles.videoPlayer}>
      <div className={styles.left}>
        <Video poster={video.image} title={video.name} />
        <VideoInfo
          episode={video.episode}
          title={video.name}
          summary={video.summary}
          date={video.date}
        />
      </div>
      <div className={styles.right}>
        <div className={styles.rightTitle}>Enother episodes</div>
        <div className={styles.rightContent}>
          {formattedResult.map((episode) => (
            <Episode
              key={episode.id}
              name={episode.name}
              image={video.image}
              episode={episode.episode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
