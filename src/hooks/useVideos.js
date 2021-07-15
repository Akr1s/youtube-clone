import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../redux/actions";
import { transformData } from "../utils";
import useFetch from "./useFetch";

const useVideos = (VIDEOS_PER_PAGE, currentPage, url) => {
  const dispatch = useDispatch();
  const videos = useSelector((state) => state.videos);

  const { result, error } = useFetch(url);

  useEffect(() => {
    if (!result) return;
    const slicedResult = result.slice(0, 300);
    const transformedResult = transformData(slicedResult);
    dispatch(addVideos(transformedResult));
  }, [result, dispatch]);

  const transformedData = useMemo(() => {
    if (!videos.length) return [];
    const firstPageIndex = (currentPage - 1) * VIDEOS_PER_PAGE;
    const lastPageIndex = firstPageIndex + VIDEOS_PER_PAGE;
    return videos.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, videos, VIDEOS_PER_PAGE]);
  return { transformedData, error, result };
};

export default useVideos;
