import React from "react";
import styles from "../../styles/HomeVideo.module.css";

function HomeVideoSceleton() {
  return (
    <div className={styles.skeletonItem}>
      <div>
        <div className={styles.skeletonImg} />
      </div>
      <div className={styles.skeletonDescription}>
        <p className={styles.skeletonTitle} />
        <p className={styles.skeletonEpisode} />
      </div>
    </div>
  );
}

export default HomeVideoSceleton;
