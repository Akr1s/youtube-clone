import React from "react";
import {
  SkeletonDescription,
  SkeletonEpisode,
  SkeletonImg,
  SkeletonItem,
  SkeletonTitle,
} from "./Styles";

function HomeVideoSceleton() {
  return (
    <SkeletonItem>
      <div>
        <SkeletonImg />
      </div>
      <SkeletonDescription>
        <SkeletonTitle />
        <SkeletonEpisode />
      </SkeletonDescription>
    </SkeletonItem>
  );
}

export default HomeVideoSceleton;
