import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import PageVideo from "../../components/PageVideo";
import HomeVideoSceleton from "../../components/Sceletons/HomeVideoSceleton";
import Pagination from "../../components/HomePagination";
import PaginationSceleton from "../../components/Sceletons/PaginationSceleton";
import useVideos from "../../hooks/useVideos";
import { useSelector } from "react-redux";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const url = "https://api.tvmaze.com/schedule/full";
  const VIDEOS_PER_PAGE = 20;
  const { length: videosLenght } = useSelector((state) => state.videos);

  const { transformedData, error } = useVideos(
    VIDEOS_PER_PAGE,
    currentPage,
    url
  );

  if (error)
    return (
      <div className={styles.home}>
        There is an error, try to refresh the page
      </div>
    );
  if (transformedData.length === 0) {
    return (
      <>
        <PaginationSceleton />
        <div className={styles.home}>
          {new Array(VIDEOS_PER_PAGE).fill(1).map((item, index) => (
            <HomeVideoSceleton key={index} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalCount={videosLenght}
        pageSize={VIDEOS_PER_PAGE}
        onPageChange={(page) => setCurrentPage(page)}
      />
      <div className={styles.home}>
        {transformedData.map((video) => {
          return <PageVideo {...video} key={video.id} />;
        })}
      </div>
    </>
  );
}

export default Home;
