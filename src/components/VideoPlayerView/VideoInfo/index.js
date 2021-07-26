import React from "react";
import styles from "../../styles/VideoInfo.module.css";
import LinkToChannel from "../../LinkToChannel";

function VideoInfo({ episode, title, summary, date, showId }) {
  const summaryText = summary ? summary : "There is nothing to show";
  return (
    <div className={styles.videoInfo}>
      <h2 className={styles.title}>{episode}</h2>
      <div className={styles.additionalInfo}>
        <p className={styles.rating}>rating...</p>
        <div className={styles.buttonsContainer}>
          <button className={styles.btn}>11k</button>
          <button className={styles.btn}>22m</button>
          <button className={styles.btn}>Share</button>
          <button className={styles.threeDots}>···</button>
        </div>
      </div>
      <div className={styles.mainInfo}>
        <LinkToChannel channel={showId} linkClass={styles.linkToChannel} />
        <h3>{title}</h3>
        <p className={styles.premiered}>{date}</p>
        <p
          className={styles.summary}
          dangerouslySetInnerHTML={{ __html: summaryText }}
        ></p>
      </div>
    </div>
  );
}

export default VideoInfo;
