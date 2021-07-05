import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import PageVideo from "../../components/PageVideo";
import { transformData } from "../../utils";
import { useDispatch } from "react-redux";
import { addVideos } from "../../redux/actions";
import HomeVideoSceleton from "../../components/Sceletons/HomeVideoSceleton";

function Home() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);
  const url = "http://api.tvmaze.com/schedule/full";
  const dispatch = useDispatch();
  const VIDEOS_PER_PAGE = 20;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoadingError(false);
        const response = await fetch(url);
        const allVideos = await response.json();
        const transformedData = transformData(
          allVideos.slice(0, VIDEOS_PER_PAGE)
        );
        setVideos(transformedData);
        dispatch(addVideos(transformedData));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setLoadingError(true);
      }
    };
    fetchVideos();
  }, [dispatch]);

  if (loading)
    return (
      <div className={styles.home}>
        {new Array(VIDEOS_PER_PAGE).fill(1).map((item, index) => (
          <HomeVideoSceleton key={index} />
        ))}
      </div>
    );
  if (loadingError)
    return (
      <div className={styles.home}>
        There is an error, try to refresh the page
      </div>
    );
  return (
    <div className={styles.home}>
      {videos.map((video) => {
        return <PageVideo {...video} key={video.id} />;
      })}
    </div>
  );
}

export default Home;
