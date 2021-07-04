import React from "react";
import styles from "../../styles/VideoInfo.module.css";

function VideoInfo({ episode, title }) {
  return (
    <div className={styles.videoInfo}>
      <h2 className={styles.title}>{episode}</h2>
      <div className={styles.additionalInfo}>
        <p className={styles.rating}>1</p>
        <div className={styles.buttonsContainer}>
          <button className={styles.btn}>11k</button>
          <button className={styles.btn}>22m</button>
          <button className={styles.btn}>Share</button>
          <button className={styles.threeDots}>···</button>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
