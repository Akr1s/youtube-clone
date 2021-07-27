import React from "react";
import { usePagination, DOTS } from "../../hooks/usePagination";
import { v4 as uuidv4 } from "uuid";
import {
  ArrowLeft,
  ArrowRight,
  PaginationContainer,
  PaginationItem,
  PaginationItemDots,
} from "./Styles";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
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
    <PaginationContainer>
      <PaginationItem
        className={`${currentPage === 1 ? "paginationItemDisabled" : ""}`}
        onClick={onPrevious}
      >
        <ArrowLeft />
      </PaginationItem>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <PaginationItemDots key={uuidv4()}>&#8230;</PaginationItemDots>
          );
        }

        return (
          <PaginationItem
            key={uuidv4()}
            className={`${
              pageNumber === currentPage ? "paginationItemSelected" : ""
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationItem
        className={`${
          currentPage === lastPage ? "paginationItemDisabled" : ""
        }`}
        onClick={onNext}
      >
        <ArrowRight />
      </PaginationItem>
    </PaginationContainer>
  );
};

export default Pagination;
