import React from "react";
import styles from "../../styles/Home.module.css";
import PageVideo from "../../components/PageVideo";
import { transformData } from "../../utils";
import { useDispatch } from "react-redux";
import { addVideos } from "../../redux/actions";
import HomeVideoSceleton from "../../components/Sceletons/HomeVideoSceleton";
import useFetch from "../../hooks/useFetch";

function Home() {
  const url = "https://api.tvmaze.com/schedule/full";
  const dispatch = useDispatch();
  const VIDEOS_PER_PAGE = 20;

  const { result, error } = useFetch(url);
  if (error)
    return (
      <div className={styles.home}>
        There is an error, try to refresh the page
      </div>
    );
  if (!result)
    return (
      <div className={styles.home}>
        {new Array(VIDEOS_PER_PAGE).fill(1).map((item, index) => (
          <HomeVideoSceleton key={index} />
        ))}
      </div>
    );

  const transformedData = transformData(result.slice(0, VIDEOS_PER_PAGE));
  dispatch(addVideos(transformedData));

  return (
    <div className={styles.home}>
      {transformedData.map((video) => {
        return <PageVideo {...video} key={video.id} />;
      })}
    </div>
  );
}

export default Home;
