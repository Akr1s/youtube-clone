import React from "react";
import { SkeletonItem, SkeletonPages } from "./Styled";

function PaginationSceleton() {
  return (
    <SkeletonItem>
      <SkeletonPages></SkeletonPages>
    </SkeletonItem>
  );
}

export default PaginationSceleton;
