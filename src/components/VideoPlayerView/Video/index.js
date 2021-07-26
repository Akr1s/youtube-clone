import React from "react";
import styles from "../../../styles/Video.module.css";
import playBtn from "../../../images/play-button.png";

function Video({ poster, title }) {
  return (
    <div className={styles.video}>
      <img src={poster} alt={title} className={styles.videoPoster} />
      <img src={playBtn} alt="Play button" className={styles.play} />
    </div>
  );
}

export default Video;
