import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import styles from "../../styles/HomePagination.module.css";
import { v4 as uuidv4 } from "uuid";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 2,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  return (
    <ul className={`${styles.paginatioContainer} ${styles.paginationBar}`}>
      <li
        className={`${styles.paginationItem} ${
          currentPage === 1 ? styles.paginationItemDisabled : ""
        }`}
        onClick={onPrevious}
      >
        <div className={styles.arrowLeft} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={uuidv4()} className={styles.paginationItemDots}>
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={uuidv4()}
            className={`${styles.paginationItem} ${
              pageNumber === currentPage ? styles.paginationItemSelected : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`${styles.paginationItem} ${
          currentPage === lastPage ? styles.paginationItemDisabled : ""
        }`}
        onClick={onNext}
      >
        <div className={styles.arrowRight} />
      </li>
    </ul>
  );
};

export default Pagination;
