import React, { useMemo, useState } from "react";
import styles from "../../styles/Home.module.css";
import PageVideo from "../../components/PageVideo";
import { transformData } from "../../utils";
import { useDispatch } from "react-redux";
import { addVideos } from "../../redux/actions";
import HomeVideoSceleton from "../../components/Sceletons/HomeVideoSceleton";
import useFetch from "../../hooks/useFetch";
import Pagination from "../../components/HomePagination";
import PaginationSceleton from "../../components/Sceletons/PaginationSceleton";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const url = "https://api.tvmaze.com/schedule/full";
  const dispatch = useDispatch();
  const VIDEOS_PER_PAGE = 20;

  const { result, error } = useFetch(url);

  const transformedData = useMemo(() => {
    if (!result) return;
    const firstPageIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
    const lastPageIndex = firstPageIndex + VIDEOS_PER_PAGE;
    return transformData(result.slice(firstPageIndex, lastPageIndex));
  }, [currentPage, result]);

  if (error)
    return (
      <div className={styles.home}>
        There is an error, try to refresh the page
      </div>
    );
  if (!result) {
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

  //needs attention
  dispatch(addVideos(transformedData));

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalCount={result.length}
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
